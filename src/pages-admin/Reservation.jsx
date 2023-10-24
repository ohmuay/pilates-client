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
    <div className="flex flex-col justify-center items-center h-full font-Cormorant">
      <div className="flex p-2">
        <span className="font-semibold text-xl text-maintext">RESERVATION</span>
      </div>
      <div className="overflow-x-auto border border-maindark">
        <table>
          <thead className="font-semibold text-base">
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
    </div>
  );
}
