//import { useState } from "react";
import axios from "../../config/axios";
import dayjs from "dayjs";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReserveLists({ list }) {
  // const [cancel, setCancel] = useState();

  const handleCancel = async () => {
    try {
      await axios.delete(`/reserve/cancel/${list.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center p-2 gap-10 text-xl border border-maindark">
      <div>{list.id}</div>
      <div>{list.classroom.classname}</div>
      <div>{dayjs(list.date).format("DD/MM/YYYY")}</div>
      <button className="cursor-pointer" onClick={handleCancel}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
