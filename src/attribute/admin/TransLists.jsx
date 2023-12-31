import { useState } from "react";
import axios from "../../config/axios";

function TransLists({ list, handleUpdate }) {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/admin/session/${list.id}`);
      handleUpdate(list.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <tr className="text-maindark">
        <td className="border-b border-secondtext2 bg-white text-center text-base">
          {list.id}
        </td>
        <td className="border-b border-secondtext2 bg-white text-center text-base">
          {list.user?.firstName}
        </td>
        <td className="border-b border-secondtext2 bg-white text-center text-base">
          {list.amount}
        </td>
        <td className="border-b border-secondtext2 bg-white text-center text-base">
          {list.price}
        </td>
        <td className="border-b border-secondtext2 bg-white text-center text-base">
          <button
            onClick={() =>
              document.getElementById(`modal-${list.id}`).showModal()
            }
          >
            <img
              id={list.id}
              src={list.paymentImg}
              alt="slip"
              className="w-10 h-10 flex-shrink-0"
            />
          </button>
          <dialog id={`modal-${list.id}`} className="modal modal-middle">
            <div className="modal-box bg-white">
              <img id={`modal-${list.id}`} src={list.paymentImg} alt="slip" />
              <div className="modal-action">
                <form
                  method="dialog"
                  className="text-maindark font-semibold text-lg"
                >
                  <button
                    onClick={() =>
                      document.getElementById(`modal-${list.id}`).close()
                    }
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </td>
        {list.status === "APPROVED" ? (
          <>
            <td className="border-b border-secondtext2 bg-white text-center text-base">
              {list.status}
            </td>
            <td className="border-b border-secondtext2 bg-white text-center text-base">
              <button disabled={true}>SAVE</button>
            </td>
          </>
        ) : (
          <>
            <td className="border-b border-secondtext2 bg-white text-center text-sm p-2">
              <input
                type="checkbox"
                onChange={handleCheckBox}
                className="w-[20px] h-[20px]"
              />
              {checked ? <div>APPROVED</div> : <div>{list.status}</div>}
            </td>
            <td className="border-b border-secondtext2 bg-white text-center text-base">
              <div className="flex justify-center">
                <button
                  className="rounded-lg bg-maindark hover:bg-maingreen text-white text-sm p-2 "
                  onClick={handleSave}
                >
                  SAVE
                </button>
              </div>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default TransLists;
