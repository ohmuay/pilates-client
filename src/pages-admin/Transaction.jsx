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
    <div className="flex flex-col justify-center items-center h-full p-16 font-Cormorant">
      <div className="flex p-2">
        <span className="font-semibold text-xl text-maintext">TRANSACTION</span>
      </div>
      <div className="overflow-x-auto border border-maindark">
        <table>
          <thead className="font-semibold text-base">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                USERNAME
              </th>
              <th scope="col" className="px-6 py-4">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-4">
                PRICE
              </th>
              <th scope="col" className="px-6 py-4">
                PAYMENT
              </th>
              <th scope="col" className="px-6 py-4">
                STATUS
              </th>
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
