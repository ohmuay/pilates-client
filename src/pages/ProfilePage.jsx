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
    <div className="md:max-[2800px]:flex justify-center items-center h-[100%] font-Cormorant">
      <div className="md:flex flex-col justify-center items-center gap-4">
        <span className="text-6xl font-semibold text-secondtext2">Profile</span>
        <span className="text-xl font-light text-thirdtex p-2">
          Welcome to the world of good health for yourself.
        </span>
        <div className="md:flex bg-mainlight rounded-2xl">
          <div className="md:flex flex-col items-center gap-6 p-8 rounded-xl w-96">
            <div>
              <img
                src={pilatesProfile}
                alt="picprofile"
                className="w-40 rounded-3xl"
              />
            </div>
            <div className="md:flex flex-col items-start text-2xl gap-2">
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
        </div>
        <button
          className={`md:flex justify-center items-center rounded-md text-lg font-semibold text-white p-2 w-[8rem]
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
