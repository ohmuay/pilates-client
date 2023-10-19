import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Joi from "joi";

import axios from "../config/axios";
import Dropdown from "../layout/Dropdown";
import ReserveLists from "../attribute/reservation/ReserveLists";
//import ErrorMessage from "../attribute/authenticate/ErrorMessage";

const selectDateSchema = Joi.date().min("now").required();

export default function ReservePage() {
  const [selectDate, setSelectDate] = useState();
  const [selectClass, setSelectClass] = useState();
  const [classrooms, setClassroom] = useState();
  const [reserveLists, setReserveList] = useState();

  const [error, setError] = useState({});

  const fetchClassrooms = async () => {
    try {
      const result = await axios.get("/reserve/classroom");
      setClassroom(result.data.classrooms);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchReserveLists = async () => {
    try {
      const result = await axios.get("/user/reservelist");
      setReserveList(result.data.reservelists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClassrooms();
    fetchReserveLists();
  }, []);

  const handleSubmit = async () => {
    const { value, error } = selectDateSchema.validate(selectDate);
    if (error) {
      return setError(error);
    }
    setError({});
    const res = await axios.post("/user/reserve", {
      date: dayjs(value),
      classroomId: selectClass.id,
    });
    const newReserve = {
      classroom: { classname: `Pilates${res.data.reserved.classroomId}` },
      date: res.data.reserved.date,
      id: res.data.reserved.id,
    };
    setReserveList([newReserve, ...reserveLists]);
    setSelectDate(null);
    setSelectClass(null);
  };

  return (
    <div className="flex flex-col pt-20 justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10 px-12 gap-7">
        <span className="text-5xl font-semibold text-secondtext2 drop-shadow-md">
          Pilates Booking
        </span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="flex flex-col gap-5 p-5 ">
        <div className="flex gap-5">
          <span className="flex p-1 text-xl font-semibold">Reserve Date :</span>
          <DatePicker
            className="flex p-1 text-lg border border-maindark rounded-md cursor-pointer"
            selected={selectDate}
            onChange={(date) => setSelectDate(date)}
          />
        </div>
        <div className="flex gap-5">
          <span className="flex p-1 text-xl font-semibold">
            Pilates Class :
          </span>
          <div className="flex justify-center items-center border border-maindark rounded-md px-2 py-1 bg-white cursor-pointer">
            <Dropdown
              classrooms={classrooms}
              setSelectClass={setSelectClass}
              selectClass={selectClass}
            />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            className="rounded-md bg-maindark hover:bg-secondtext2 text-white p-2 w-[100px]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col p-5 w-[50%]">
        <div className="text-2xl font-semibold text-secondtext2 p-3 ">
          Reservation list
        </div>
        {reserveLists?.map((list) => (
          <ReserveLists
            key={list?.id}
            list={list}
            setReserveList={setReserveList}
            reserveLists={reserveLists}
          />
        ))}
      </div>
    </div>
  );
}
