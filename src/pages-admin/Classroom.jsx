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
    <div className="flex flex-col justify-evenly items-center h-full font-Cormorant text-maindark">
      <div className="flex">
        <span className="font-semibold text-2xl">CLASSROOM</span>
      </div>
      <div className="overflow-x-auto border border-maindark">
        <table className="table table-xl">
          <thead className="font-semibold text-lg text-maindark">
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
              <ClassLists key={list?.id} list={list} />
            ))}
          </tbody>
        </table>
      </div>
      <form className="grid grid-cols-4 p-5 gap-3" onClick={handleNewClass}>
        <span className="grid col-span-4 text-lg">Add new classroom</span>
        <input
          className="input w-full max-w-xs rounded-md  bg-white p-2"
          type="text"
          placeholder="classname"
          name="classname"
          value={input.classname}
          onChange={handleInput}
        />
        <input
          className="input w-full max-w-xs rounded-md  bg-white p-2"
          type="text"
          placeholder="time"
          name="time"
          value={input.time}
          onChange={handleInput}
        />
        <input
          className="input w-full max-w-xs rounded-md  bg-white p-2"
          type="text"
          placeholder="userlimit"
          name="userlimit"
          value={input.userlimit}
          onChange={handleInput}
        />
        <button className="text-maindark border border-maingray rounded-md p-1">
          Save
        </button>
      </form>
    </div>
  );
}
