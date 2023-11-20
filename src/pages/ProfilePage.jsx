import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import pilatesProfile from "../image/girl.jpg";

export default function ProfilePage() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios
      .get("/user/profile")
      .then((res) => setProfile(res.data.profile))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[100%] font-sans">
      <div className="flex flex-col justify-center items-center gap-4 h-4/5 p-4 bg-mainvanilla bg-opacity-90">
        <span className="text-6xl font-semibold text-secondtext2">Profile</span>
        <span className="text-base font-medium text-mainlight">
          Welcome to the world of good health for yourself.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 h-4/5 border border-secondtext2 bg-mainnude">
        <div className="flex">
          <div className="flex flex-col items-center gap-6 p-8 w-96">
            <div>
              <img
                src={pilatesProfile}
                alt="picprofile"
                className="w-60 rounded-3xl"
              />
            </div>
            <div className="flex flex-col items-start text-3xl gap-2 text-maintext">
              {profile ? (
                <>
                  <div>Firstname : {profile.firstName} </div>
                  <div>Lastname : {profile.lastName}</div>
                  <div>Email : {profile.email} </div>
                  <div>Mobile : {profile.mobile} </div>
                  <div className="font-extrabold bg-mainvanilla bg-opacity-30 px-2 rounded-xl">
                    Amount : {profile.sessions[0]?.amount || 0}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <button
          className={`flex justify-center items-center rounded-md text-base font-semibold text-white p-2 w-[120px]
          ${
            !profile?.sessions[0]?.amount
              ? "bg-maingray"
              : "bg-maindark hover:bg-secondtext2"
          }`}
          onClick={() => navigate("/reservation")}
          disabled={!profile?.sessions[0]?.amount}
        >
          Reservation
        </button>
      </div>
    </div>
  );
}
