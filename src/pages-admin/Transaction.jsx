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

  useEffect(() => {
    fetchTransaction();
  }, [allList]);

  // const newStatus = allList.find()

  return (
    <div className="flex flex-col justify-center items-center px-10 pt-20">
      <div className="flex p-10 font-semibold text-3xl text-maintext">
        <span>TRANSACTION</span>
      </div>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border font-semibold text-lg dark:border-maindark">
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
            <TransLists key={list.id} list={list} allList={allList} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
