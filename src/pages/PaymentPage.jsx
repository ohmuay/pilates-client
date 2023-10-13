import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  console.log(params.get("packageId"));
  return (
    <div className="payment">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-5xl font-semibold text-maindark">Payment</span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="img">
        <img />
      </div>
      <div className="slip"></div>
      <button>Submit</button>
    </div>
  );
}
