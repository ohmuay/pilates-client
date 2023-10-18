import { useState } from "react";

export default function Dropdown({ classrooms, setSelectClass, selectClass }) {
  const [isOpen, setIsOpen] = useState(false);

  const select = (id) => {
    setSelectClass(id);
    setIsOpen(false);
  };

  return (
    <div className="relative" onClick={() => setIsOpen(!isOpen)}>
      <div>
        {!selectClass
          ? "select-classroom"
          : `${selectClass?.classname} ${selectClass?.time}`}
      </div>
      {isOpen &&
        classrooms.map((item) => (
          <div key={item.id} onClick={() => select(item)}>
            {item.classname} {item.time}
          </div>
        ))}
    </div>
  );
}
