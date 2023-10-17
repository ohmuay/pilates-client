import { useState, useEffect } from "react";
import axios from "../config/axios";
import TransLists from "../attribute/admin/TransLists";

export default function Transaction() {
  const [lists, setList] = useState([]);
  console.log(lists);

  useEffect(() => {
    axios
      .get("/admin/transaction")
      .then((res) => setList(res.data.transactions))
      .catch((err) => console.log(err));
  }, []);

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
          {lists.map((list) => (
            <TransLists key={list.id} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

{
  /* <div className="flex flex-col justify-center items-center px-10 pt-20">
      <div className="flex flex-row justify-center items-center p-10 gap-20 font-semibold text-xl">
        <div>id</div>
        <div>username</div>
        <div>amount</div>
        <div>payment</div>
        <div>status</div>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        {lists.map((list) => (
          <TransList
            key={list.id}
            id={list.id}
            name={list.user?.firstName}
            amount={list.amount}
            price={list.price}
            payment={list.paymentImg}
            status={list.status}
          />
        ))}
      </div>
    </div> */
}
