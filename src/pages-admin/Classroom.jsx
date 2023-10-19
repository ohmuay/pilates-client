import { useState, useEffect } from "react";
import axios from "../config/axios";
import ClassLists from "../attribute/admin/ClassLists";

export default function Classroom() {
  const [allClassroom, setAllClassroom] = useState([]);

  const fetchAllClassroom = async () => {
    try {
      const result = await axios.get("/reserve/classroom");
      setAllClassroom(result.data.classrooms);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllClassroom();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-10 pt-20">
      <div className="flex p-10 font-semibold text-3xl text-maintext">
        <span>CLASSROOM</span>
      </div>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border font-semibold text-lg dark:border-maindark">
          <tr>
            <th scope="col" className="px-6 py-4">
              ID
            </th>
            <th scope="col" className="px-6 py-4">
              CLASSNAME
            </th>
            <th scope="col" className="px-6 py-4">
              TIME
            </th>
          </tr>
        </thead>
        <tbody>
          {allClassroom.map((list) => (
            <ClassLists key={list.id} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
