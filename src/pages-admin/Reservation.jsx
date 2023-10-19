import { useState, useEffect } from "react";
import axios from "../config/axios";
import AllReserveLists from "../attribute/admin/AllReserveLists";

export default function Reservation() {
  const [allReserve, setAllReserve] = useState([]);

  const fetchReserve = async () => {
    try {
      const result = await axios.get("/admin/reservation");
      setAllReserve(result.data.allReserve);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReserve();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-10 pt-20">
      <div className="flex p-10 font-semibold text-3xl text-maintext">
        <span>RESERVATION</span>
      </div>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border font-semibold text-lg dark:border-maindark">
          <tr>
            <th scope="col" className="px-6 py-4">
              USERNAME
            </th>
            <th scope="col" className="px-6 py-4">
              CLASSNAME
            </th>
            <th scope="col" className="px-6 py-4">
              DATE
            </th>
          </tr>
        </thead>
        <tbody>
          {allReserve?.map((list) => (
            <AllReserveLists key={list.id} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
