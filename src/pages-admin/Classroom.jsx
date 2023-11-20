import { useState, useEffect } from "react";
import Joi from "joi";
import axios from "../config/axios";
import ClassLists from "../attribute/admin/ClassLists";

const NewClassSchema = Joi.object({
  classname: Joi.string().required(),
  time: Joi.string().required(),
  userlimit: Joi.string().required(),
});

export default function Classroom() {
  const [input, setInput] = useState({
    classname: "",
    time: "",
    userlimit: "",
  });

  const [allClassroom, setAllClassroom] = useState([]);
  const [error, setError] = useState([]);

  const fetchAllClassroom = async () => {
    try {
      const result = await axios.get("/reserve/classroom");
      setAllClassroom(result.data.classrooms);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleNewClass = async () => {
    try {
      const { value, error } = NewClassSchema.validate(input);
      console.log(value);
      if (error) {
        return setError(error);
      }
      const newClass = await axios.post("admin/createclass", value);
      setAllClassroom([...allClassroom, newClass]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllClassroom();
  }, []);

  return (
    <div className="flex flex-col items-center h-[100%] font-sans text-black gap-4">
      <div className="flex items-center justify-center h-[80px]">
        <span className="font-bold text-2xl">CLASSROOM</span>
      </div>
      <div className="overflow-x-auto w-[40%]">
        <table className="min-w-full">
          <thead className="border border-secondtext2 text-black">
            <tr>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                ID
              </th>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                CLASSNAME
              </th>
              <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                TIME
              </th>
              {/* <th className="p-2 bg-mainvanilla text-center text-base font-semibold text-black">
                USERLIMIT
              </th> */}
            </tr>
          </thead>
          <tbody className="border border-secondtext2">
            {allClassroom.map((list) => (
              <ClassLists key={list?.id} list={list} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center p-2 bg-mainvanilla bg-opacity-60 rounded-lg">
        <form className="flex gap-4" onClick={handleNewClass}>
          <span className="flex items-center font-medium text-base">
            Add new classroom
          </span>
          <input
            className="input rounded-md bg-white"
            type="text"
            placeholder="classname"
            name="classname"
            value={input.classname}
            onChange={handleInput}
          />
          <input
            className="input rounded-md bg-white"
            type="text"
            placeholder="time"
            name="time"
            value={input.time}
            onChange={handleInput}
          />
          <input
            className="input rounded-md bg-white"
            type="text"
            placeholder="userlimit"
            name="userlimit"
            value={input.userlimit}
            onChange={handleInput}
          />
          <button className="text-white bg-secondtext2 rounded-md p-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
