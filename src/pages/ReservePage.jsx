import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Joi from "joi";

import axios from "../config/axios";
import Dropdown from "../layout/Dropdown";
import ReserveLists from "../attribute/reservation/ReserveLists";
import { alertBox } from "../utils/sweet-alert";

const selectDateSchema = Joi.date().min("now").required();

export default function ReservePage() {
  const [selectDate, setSelectDate] = useState();
  const [selectClass, setSelectClass] = useState();
  const [classrooms, setClassroom] = useState();
  const [reserveLists, setReserveList] = useState();
  const [error, setError] = useState({});

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // start date + 1
  console.log(minDate);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7); // start date + 7

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
    alertBox("Completed !");
    setReserveList([newReserve, ...reserveLists]);
    setSelectDate(null);
    setSelectClass(null);
  };

  return (
    <div className="flex flex-col h-[100%] font-sans text-maintext">
      <div className="flex flex-col justify-center items-center p-4 gap-4 h-[160px] bg-mainvanilla">
        <span className="text-5xl font-semibold text-secondtext2 ">
          Pilates Booking
        </span>
        <span className="text-base font-medium text-mainlight">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4 items-center">
        <div className="flex gap-4 items-center w-[320px]">
          <span className="flex p-2 text-lg font-medium">Date :</span>
          <DatePicker
            className="flex p-2 border border-secondtext2 rounded-md cursor-pointer bg-white"
            selected={selectDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date) => setSelectDate(date)}
          />
        </div>
        <div className="flex gap-4 items-center w-[320px]">
          <span className="flex p-2 text-lg font-medium">Class :</span>
          <div className="flex items-center border border-secondtext2 rounded-md p-2 bg-white cursor-pointer">
            <Dropdown
              classrooms={classrooms}
              setSelectClass={setSelectClass}
              selectClass={selectClass}
            />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            className="rounded-md bg-secondtext2 hover:bg-maindark text-white p-2 w-[6rem]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-4 p-4 w-full h-[440px] bg-mainnude bg-opacity-70">
        <div className="text-2xl font-semibold text-secondtext2 p-2">
          Reservation list
        </div>
        <div className="">
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
    </div>
  );
}
