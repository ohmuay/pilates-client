import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import pilatesProfile from "../image/pilates2.jpg";

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
    <div className="flex justify-around items-center h-[100%] font-Cormorant">
      <div className="flex flex-col justify-center items-center px-5 gap-10 ">
        <span className="text-6xl font-semibold text-secondtext2">Profile</span>
        <span className="text-xl font-light text-thirdtext pb-5">
          Welcome to the world of good health for yourself.
        </span>
        <div className="flex gap-4">
          <div>
            <img
              src={pilatesProfile}
              alt="picprofile"
              width="250px"
              className="flex rounded-md"
            />
          </div>
          <div className="bg-maingreen flex flex-col justify-center items-start gap-4 p-10 rounded-xl text-xl w-[27rem]">
            {profile ? (
              <>
                <div>Firstname : {profile.firstName} </div>
                <div>Lastname : {profile.lastName}</div>
                <div>Email : {profile.email} </div>
                <div>Mobile : {profile.mobile} </div>
                <div className="font-extrabold">
                  Amount : {profile.sessions[0]?.amount || 0}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          className={`flex justify-center items-center rounded-md text-lg font-semibold text-white p-2 w-[9rem]
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
