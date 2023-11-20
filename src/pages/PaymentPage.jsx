import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import promtpay from "../image/promtpay.png";
import axios from "../config/axios";
import { alertBox } from "../utils/sweet-alert";

export default function PaymentPage() {
  const [file, setFile] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const packageId = params.get("packageId");

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    try {
      const formData = new FormData();
      e.preventDefault();
      if (file) {
        formData.append("paymentImg", file);
      }
      if (packageId) {
        formData.append("packageId", packageId);
      }
      await axios.post("/transaction", formData);
      alertBox("Completed, Pending approval");
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100%] font-sans">
      <div className="flex flex-col justify-center items-center gap-4 p-4 h-4/5 bg-mainvanilla bg-opacity-90">
        <span className="text-5xl font-semibold text-secondtext2">Payment</span>
        <span className="text-base font-medium text-mainlight">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-2 h-4/5 border border-secondtext2 bg-mainnude bg-opacity-60">
        <div className="flex h-[400px] w-[320px] p-4">
          <img src={promtpay} alt="picpromtpay" />
        </div>
        <form
          className="flex flex-col items-center p-4 gap-8"
          onSubmit={handleSubmitForm}
        >
          <input
            className="cursor-pointer border-2 border-secondtext2 "
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <button
            className="flex justify-center items-center w-[100px] h-[20px] bg-secondtext2 
        hover:bg-maintext text-mainlight p-4 border rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
