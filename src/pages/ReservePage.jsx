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
    <div className="md:max-[2800px]:flex flex-col justify-start items-center h-[100%] font-Cormorant">
      <div className="md:flex flex-col justify-center items-center p-4 gap-4">
        <span className="text-5xl font-semibold text-secondtext2 ">
          Pilates Booking
        </span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="md:flex flex-col gap-4 p-4 justify-center bg-mainlight rounded-2xl">
        <div className="flex gap-4 items-center">
          <span className="flex p-2 text-lg font-medium">Reserve Date :</span>
          <DatePicker
            className="flex p-2 border border-maindark rounded-md cursor-pointer"
            selected={selectDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date) => setSelectDate(date)}
          />
        </div>
        <div className="md:flex gap-5 items-center">
          <span className="flex p-2 text-lg font-medium">Pilates Class :</span>
          <div className="flex items-center border border-maindark rounded-md p-2 bg-white cursor-pointer">
            <Dropdown
              classrooms={classrooms}
              setSelectClass={setSelectClass}
              selectClass={selectClass}
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center ">
          <button
            className="rounded-md bg-secondtext2 hover:bg-maindark text-white p-2 w-[6rem]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="md:flex flex-col p-4 w-[50rem]">
        <div className="text-2xl font-normal text-secondtext2 p-2">
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
