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
    <div className="flex flex-col justify-start items-center h-[100%] font-sans text-black gap-4">
      <div className="">
        <span className="font-bold justify-center text-xl text-maintext p-2">
          RESERVATION
        </span>
      </div>
      <div className="overflow-x-auto h-[740px] w-auto">
        <table className="">
          <thead className="border border-secondtext2">
            <tr>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                USERNAME
              </th>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                CLASSNAME
              </th>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                DATE
              </th>
            </tr>
          </thead>
          <tbody className="border border-secondtext2">
            {allReserve?.map((list) => (
              <AllReserveLists key={list.id} list={list} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
