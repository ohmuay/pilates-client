import { useState, useEffect } from "react";
import axios from "../config/axios";
import TransLists from "../attribute/admin/TransLists";

export default function Transaction() {
  const [allList, setAllList] = useState([]);

  const fetchTransaction = async () => {
    try {
      const result = await axios.get("/admin/transaction");
      setAllList(result.data.transactions);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    const idx = allList.findIndex((el) => el.id === id);
    let data = allList[idx];
    let newAllList = [...allList];
    let newData = { ...data, status: "APPROVED" };
    newAllList.splice(idx, 1, newData);
    setAllList(newAllList);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="md:max-[2800px]:flex flex-col justify-start items-center h-[100%] font-Cormorant pt-10 gap-4">
      <div className="">
        <span className="font-semibold justify-center text-xl text-maintext">
          TRANSACTION
        </span>
      </div>
      <div className="overflow-x-auto h-[700px]">
        <table className="min-w-full border-2">
          <thead className="">
            <tr>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                ID
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                USERNAME
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                AMOUNT
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                PRICE
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                PAYMENT
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black">
                STATUS
              </th>
              <th className="p-4 bg-gray-200 text-left text-base font-semibold text-black"></th>
            </tr>
          </thead>
          <tbody>
            {allList.map((list) => (
              <TransLists
                key={list.id}
                list={list}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
