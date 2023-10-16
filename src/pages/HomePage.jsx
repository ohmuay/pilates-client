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
    <div className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center pt-10 pb-32">
        <span className="text-7xl font-semibold text-secondtext2 pt-10 pb-8 drop-shadow-lg tracking-widest">
          PILATES STUDIO
        </span>
        <span className="text-xl text-thirdtext pb-20 drop-shadow-m tracking-widest">
          Healthy lifestyle in your life
        </span>
        <div className="h-[750px] overflow-hidden flex justify-center items-center">
          <img src={cover} alt="pic" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 pb-32">
        <div className="flex w-[40%] shadow">
          <img src={group} alt="pic2" />
        </div>
        <div className="flex flex-col w-[50rem] p-4 gap-8">
          <div className="text-secondtext2 text-4xl font-semibold px-4 drop-shadow-md tracking-wider">
            WHAT IS PILATES?...
          </div>
          <div className="text-maintext text-2xl p-4 rounded-2xl drop-shadow-md tracking-wide">
            Pilates is a form of exercise and body conditioning that can improve
            muscle tone, flexibility and strength, as well as help you heal from
            injuries.
          </div>
          <span className="flex p-4 w-44 justify-center border rounded-full text-white text-xl font-semibold bg-secondtext hover:bg-secondtext2 ">
            <Link to="/auth/register">REGISTER</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col pb-5">
        <div className="text-secondtext2 font-semibold text-5xl pb-20 flex justify-center drop-shadow-md tracking-wider">
          OUR ACTIVITY
        </div>
        <div className="flex overflow-x-auto h-[390px]">
          <img src={pilates10} alt="pic3" className="p-1" />
          <img src={pilatesmen1} alt="pic4" className="p-1" />
          <img src={pilates8} alt="pic5" className="p-1" />
          <img src={pilates11} alt="pic5" className="p-1" />
          <img src={pilates9} alt="pic5" className="p-1" />
          <img src={pilates4} alt="pic5" className="p-1" />
        </div>
      </div>
    </div>
  );
}
