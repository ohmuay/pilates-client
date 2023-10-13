import { useNavigate } from "react-router-dom";

export default function ApplyClass({
  name,
  amount,
  pricepertime,
  totalprice,
  id,
}) {
  const navigate = useNavigate();

  return (
    <>
      {name === "PLUS" ? (
        <>
          <div className="flex justify-around items-center border border-maintext rounded-xl p-20 mb-6 bg-maingreen">
            <div className="font-bold text-maindark text-5xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-5xl">
              {totalprice}
            </div>
            <button
              className="bg-maindark rounded-full text-mainlight text-2xl min-w-[180px] min-h-[65px] hover:bg-secondtext2"
              onClick={() => navigate(`/transaction?packageId=${id}`)}
            >
              Choose
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-around items-center border border-maintext rounded-xl p-20 mb-6">
            <div className="font-semibold text-maintext text-4xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-3xl">
              {totalprice}
            </div>
            <button
              className="border-[2px] border-maindark rounded-full text-maindark text-lg min-w-[150px] min-h-[60px] hover:bg-secondtext"
              onClick={() => navigate(`/transaction?packageId=${id}`)}
            >
              Choose
            </button>
          </div>
        </>
      )}
    </>
  );
}
