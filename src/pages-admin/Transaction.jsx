import { useState, useEffect } from "react";
import axios from "../config/axios";
import TransLists from "../attribute/admin/TransLists";
import Pagination from "./component/Pagination";

export default function Transaction() {
  const [allList, setAllList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const fetchTransaction = async () => {
    try {
      const result = await axios.get("/admin/transaction");
      setAllList(result.data.transactions);
    } catch (err) {
      console.log(err);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allList.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(allList.length / recordsPerPage);

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
    <div className="flex flex-col justify-start items-center h-[100%] w-full font-sans pt-6 gap-4">
      <div className="">
        <span className="font-bold justify-center text-xl text-maintext">
          TRANSACTION
        </span>
      </div>
      <div className="overflow-x-auto h-[740px] w-3/4">
        <table className="min-w-full">
          <thead className="border border-secondtext2">
            <tr>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                ID
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                USERNAME
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                AMOUNT
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                PRICE
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                PAYMENT
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black">
                STATUS
              </th>
              <th className="p-4 bg-mainvanilla text-center text-base font-semibold text-black"></th>
            </tr>
          </thead>
          <tbody className="border border-secondtext2">
            {currentRecords.map((list) => (
              <TransLists
                key={list.id}
                list={list}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
