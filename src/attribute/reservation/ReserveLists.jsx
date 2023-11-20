import { useState } from "react";
import dayjs from "dayjs";
import Modal from "../../layout/Modal";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CancelClass from "./CancelClass";

export default function ReserveLists({ list, setReserveList, reserveLists }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-2 text-base text-maintext border border-secondtext2 w-[600px]">
      <div>{list?.classroom?.classname}</div>
      <div>{dayjs(list?.date).format("DD/MM/YYYY")}</div>
      <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <CancelClass
          key={list.id}
          list={list}
          onClose={() => setIsOpen(false)}
          setReserveList={setReserveList}
          reserveLists={reserveLists}
        />
      </Modal>
    </div>
  );
}
