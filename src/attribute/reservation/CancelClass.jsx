import axios from "../../config/axios";

export default function CancelClass({
  list,
  onClose,
  setReserveList,
  reserveLists,
}) {
  const handleCancel = async () => {
    try {
      await axios.delete(`/reserve/cancel/${list.id}`);
      onClose();
      setReserveList(reserveLists.filter((el) => el.id != list.id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-16 p-2 justify-center items-center ">
      <div className="text-4xl font-semibold text-secondtext2">
        Do you want to cancel this class. ?
      </div>
      <button
        onClick={handleCancel}
        className="text-lg font-semibold rounded-lg border-2 border-secondtext2 hover:bg-secondtext p-1 w-14"
      >
        YES
      </button>
    </div>
  );
}
