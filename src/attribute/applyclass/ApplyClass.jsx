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
          <div className="md:flex justify-around items-center border border-maintext rounded-xl p-10 bg-maingreen">
            <div className="font-bold text-maindark text-3xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-3xl">
              {totalprice}
            </div>
            <button
              className="md:flex justify-center items-center bg-maindark rounded-full text-mainlight text-xl min-w-[170px] min-h-[65px] hover:bg-secondtext2"
              onClick={() => navigate(`/payment?packageId=${id}`)}
            >
              Choose
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="md:flex justify-around items-center border border-maintext p-10 rounded-xl">
            <div className="font-semibold text-maintext text-2xl">{name}</div>
            <div className="text-maintext text-xl">{amount}</div>
            <div className="text-maintext text-xl">{pricepertime}</div>
            <div className="text-maintext font-semibold text-2xl">
              {totalprice}
            </div>
            <button
              className="md:flex justify-center items-center border-2 border-maindark rounded-full text-maindark text-lg min-w-[150px] min-h-[60px] hover:bg-secondtext hover:text-mainlight hover:border-none"
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
