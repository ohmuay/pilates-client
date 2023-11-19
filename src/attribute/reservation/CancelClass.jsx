import axios from "../../config/axios";
import { alertBox } from "../../utils/sweet-alert";

export default function CancelClass({
  list,
  onClose,
  setReserveList,
  reserveLists,
}) {
  const handleCancel = async () => {
    try {
      await axios.delete(`/reserve/cancel/${list.id}`);
      alertBox("Cancel class");
      onClose();
      setReserveList(reserveLists.filter((el) => el.id != list.id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-16 p-2 justify-center items-center">
      <div className="text-4xl font-semibold text-secondtext2">
        Do you want to cancel this class. ?
      </div>
      <button
        onClick={handleCancel}
        className="font-semibold rounded-xl border-2 text-secondtext2 border-secondtext2 hover:bg-secondtext hover:text-white p-1 w-14"
      >
        YES
      </button>
    </div>
  );
}
