import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { toast } from "react-toastify";
import promtpay from "../image/promtpay.png";
import axios from "../config/axios";

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
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-10 pt-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-4xl font-semibold text-secondtext2 drop-shadow-md pt-10">
          Payment
        </span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="flex h-[480px] w-[360px] pt-5">
        <img src={promtpay} alt="picpromtpay" />
      </div>
      <form
        className="flex flex-col items-center p-5 gap-4"
        onSubmit={handleSubmitForm}
      >
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button
          className="flex justify-center items-center w-[120px] h-[35px] bg-maindark 
        hover:bg-secondtext2 text-white p-4 border rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
