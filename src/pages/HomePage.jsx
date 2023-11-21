import { Link } from "react-router-dom";
import cover from "../image/cover.jpg";
import group from "../image/group.jpg";
import pilates10 from "../image/pilates10.jpg";
import pilatesmen1 from "../image/pilatesmen1.jpg";
import pilates8 from "../image/pilates8.jpg";
import pilates9 from "../image/pilates9.jpg";
import pilates4 from "../image/pilates4.jpg";
import pilates11 from "../image/pilates11.jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col h-[100%] pt-10">
      <div className="bg-mainlight flex justify-center gap-10 h-[540px]">
        <div className="flex justify-center items-center relative">
          <p className="bg-secondtext h-80 w-80 rounded-full absolute -bottom-16 -left-40 opacity-20"></p>
          <img
            src={cover}
            alt="pic"
            className="flex rounded-t-full w-[500px] h-[380px] z-20"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-4 font-sans">
          <span className="text-6xl font-semibold text-secondtext2 tracking-widest">
            PILATES STUDIO
          </span>
          <span className="text-2xl text-maingray tracking-widest">
            Move Better, Feel Better
          </span>
        </div>
      </div>
      <div className="bg-mainvanilla flex justify-center items-center gap-24 h-[540px] z-10">
        <div className="bg-mainnude bg-opacity-90 p-4 flex flex-col w-[660px] gap-2 rounded-2xl">
          <div className="text-secondtext2 text-2xl font-sans font-semibold px-2">
            WHAT IS PILATES ?...
          </div>
          <div className="text-secondtext2 text-xl p-2 font-sans">
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
          <span className="flex p-2 w-32 justify-center border border-secondtext2 rounded-full text-secondtext2 text-lg font-semibold hover:bg-secondtext2 hover:text-white ">
            <Link to="/auth/register">REGISTER</Link>
          </span>
        </div>
        <div className="">
          <img
            src={group}
            alt="pic2"
            className="w-[520px] h-[400px] shadow-xl"
          />
        </div>
      </div>
      <div className="bg-mainlight flex flex-col justify-center items-center h-[560px] gap-6">
        <div className="flex flex-col justify-center items-center gap-2 text-secondtext2 font-sans">
          <span className=" text-3xl font-semibold">OUR ACTIVITY</span>
          <p className="text-2xl">Pilates is suitable for everyone.</p>
        </div>
        <div className="flex gap-6">
          <div className="bg-mainvanilla rounded-3xl bg-opacity-40">
            <img
              src={pilates10}
              alt="pic3"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
          <div className="flex bg-mainvanilla rounded-3xl bg-opacity-40">
            <img
              src={pilates8}
              alt="pic5"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
          <div className="flex bg-mainvanilla rounded-3xl bg-opacity-40">
            <img
              src={pilates4}
              alt="pic4"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-mainvanilla flex flex-col items-center justify-center h-[440px] gap-4">
        <div className="flex text-2xl text-secondtext2 font-sans bg-mainnude p-2 rounded-xl bg-opacity-80">
          Suitable for all genders
        </div>
        <div className="flex gap-4">
          <div className="flex bg-mainnude rounded-3xl bg-opacity-70">
            <img
              src={pilates11}
              alt="pic5"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
          <div className="flex bg-mainnude rounded-3xl bg-opacity-70">
            <img
              src={pilates9}
              alt="pic5"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
          <div className="flex bg-mainnude rounded-3xl bg-opacity-70">
            <img
              src={pilatesmen1}
              alt="pic5"
              className="w-[380px] h-[300px] p-4 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
