import { Link } from "react-router-dom";
import cover from "../image/cover.jpg";
import group from "../image/group.jpg";
import pilates10 from "../image/pilates10.jpg";
import pilatesmen1 from "../image/pilatesmen1.jpg";
import pilates8 from "../image/pilates8.jpg";
import pilates9 from "../image/pilates9.jpg";
// import pilates4 from "../image/pilates4.jpg";
import pilates11 from "../image/pilates11.jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex justify-center items-center pt-20 pb-32 w-full gap-4">
        <div className="flex justify-center items-center w-[40rem] p-2 bg-mainnude rounded-t-full">
          <img src={cover} alt="pic" className="flex border rounded-t-full" />
          <div className=" w-[25rem] h-[20rem] rounded-t-full p-16 -z-30 "></div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-5 font-Cormorant">
          <span className="text-5xl font-bold text-secondtext2 tracking-widest">
            PILATES STUDIO
          </span>
          <span className="text-3xl text-thirdtext pt-3 tracking-widest">
            Move Better, Feel Better
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 px-4">
        <div className="flex flex-col w-[40rem] p-3 gap-4">
          <div className="text-secondtext2 text-3xl font-Cormorant font-semibold px-2">
            WHAT IS PILATES ?...
          </div>
          <div className="text-secondtext2 text-2xl font-Cormorant p-2">
            <p>
              Pilates is a system of exercise and movement created by Joseph
              Pilates that is designed to increase strength, flexibility, and
              balance. It integrates breath and movement within proper body
              mechanics to increase awareness, and use all of the muscles of the
              body as they were designed. Most of the exercises focus on the
              pelvis and trunk, utilizing both stability and mobility to train
              the body. It can be practiced on a Mat using your own body and
              sometimes small props, or on specialized Pilates Apparatus or
              Pilates machines (the Pilates Reformer is the most common). Part
              of the beauty of the method is that it can be modified to fit the
              needs and abilities of each individual practitioner.
            </p>
          </div>
          <span className="flex p-2 w-[9rem] justify-center border rounded-full text-white text-xl font-semibold bg-secondtext hover:bg-secondtext2 ">
            <Link to="/auth/register">REGISTER</Link>
          </span>
        </div>
        <div className="w-[30rem] p-2">
          <img src={group} alt="pic2" className="border rounded-xl" />
        </div>
      </div>
      <div className="flex pt-36 justify-center items-center gap-20 w-full">
        <div className=" flex w-[32rem] h-[23rem] p-3 rounded-2xl bg-mainnude">
          <img src={pilates10} alt="pic3" className="rounded-3xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-secondtext2 font-Cormorant">
          <span className=" text-3xl font-semibold">OUR ACTIVITY</span>
          <p className="text-2xl">Pilates is suitable for everyone.</p>
          <div className="flex w-[20rem] h-[15rem] p-3 bg-mainnude rounded-xl">
            <img src={pilates8} alt="pic5" className="rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 pt-28 pb-10 gap-7">
        <div className="grid col-span-3 text-2xl text-secondtext2 font-Cormorant ">
          Suitable for all genders
        </div>
        <div className="flex w-[25rem] h-[20rem] p-4 bg-mainnude rounded-t-full">
          <img src={pilates11} alt="pic5" className="rounded-t-xl" />
        </div>
        <div className="flex w-[25rem] h-[20rem] p-4 bg-mainnude rounded-t-full">
          <img src={pilates9} alt="pic5" className="rounded-t-xl" />
        </div>
        <div className="flex w-[25rem] h-[20rem] p-4 bg-mainnude rounded-t-full">
          <img src={pilatesmen1} alt="pic5" className="rounded-t-xl" />
        </div>
      </div>
    </div>
  );
}
