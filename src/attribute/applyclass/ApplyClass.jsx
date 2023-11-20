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
          <div className="flex justify-around items-center border border-secondtext2 rounded-xl p-10 bg-mainvanilla bg-opacity-70">
            <div className="font-bold text-maintext text-3xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-3xl">
              {totalprice}
            </div>
            <button
              className="flex justify-center items-center bg-secondtext rounded-full text-mainlight text-xl w-[160px] h-[64px] hover:bg-maindark"
              onClick={() => navigate(`/payment?packageId=${id}`)}
            >
              Choose
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-around items-center border border-secondtext2 p-10 rounded-xl">
            <div className="font-semibold text-maintext text-2xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-2xl">
              {totalprice}
            </div>
            <button
              className="flex justify-center items-center border-2 border-maindark rounded-full text-maindark text-lg w-[140px] h-[60px] hover:bg-maindark hover:text-mainlight hover:border-none"
              onClick={() => navigate(`/payment?packageId=${id}`)}
            >
              Choose
            </button>
          </div>
        </>
      )}
    </>
  );
}
