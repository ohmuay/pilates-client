import { useState } from "react";
import axios from "../../config/axios";

function TransLists({ list }) {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/admin/session/${list.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <tr className="border dark:border-maindark text-lg">
        <td className="whitespace-nowrap px-6 py-4">{list.id}</td>
        <td className="whitespace-nowrap px-6 py-4">{list.user?.firstName}</td>
        <td className="whitespace-nowrap px-6 py-4">{list.amount}</td>
        <td className="whitespace-nowrap px-6 py-4">{list.price}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <img src={list.paymentImg} alt="slip" className="w-[15%] h-[15%]" />
        </td>
        {list.status === "APPROVED" ? (
          <>
            <td className="whitespace-nowrap px-6 py-4">{list.status}</td>
            <td className="whitespace-nowrap px-6 py-4">
              <button disabled={true}>SAVE</button>
            </td>
          </>
        ) : (
          <>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                type="checkbox"
                onChange={handleCheckBox}
                className="w-[20px] h-[20px] flex border"
              />
              {checked ? <div>APPROVED</div> : <div>{list.status}</div>}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <button
                className="flex rounded-lg bg-maindark hover:bg-maingreen text-white text-base p-3 "
                onClick={handleSave}
              >
                SAVE
              </button>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default TransLists;
