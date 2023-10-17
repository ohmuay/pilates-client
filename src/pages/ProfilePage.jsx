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

  //console.log(profile);

  return (
    <div className="flex pt-10 justify-around items-center h-[100%]">
      <div className="flex flex-col justify-center items-center px-5 gap-10 ">
        <span className="text-6xl font-semibold text-secondtext2 drop-shadow-md pt-5">
          Profile
        </span>
        <span className="text-xl font-light text-thirdtext pb-5">
          Welcome to the world of good health for yourself.
        </span>
        <div className="flex gap-4">
          <div>
            <img
              src={pilatesProfile}
              alt="picprofile"
              width="250px"
              className="flex rounded-md shadow-md"
            />
          </div>
          <div className="  bg-maingreen flex flex-col justify-center items-start gap-4 p-10 rounded-lg text-xl w-[500px] shadow-md">
            {profile ? (
              <>
                <div>Firstname : {profile.firstName} </div>
                <div>Lastname : {profile.lastName}</div>
                <div>Email : {profile.email} </div>
                <div>Mobile : {profile.mobile} </div>
                <div className="font-extrabold">
                  Amount : {profile.sessions[0].amount}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          className="flex justify-center items-center rounded-md bg-maindark hover:bg-secondtext2 text-xl font-semibold text-white p-3 w-[200px]"
          onClick={() => navigate("/reservation")}
        >
          Reservation
        </button>
      </div>
    </div>
  );
}
