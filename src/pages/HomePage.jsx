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
      <div className="flex justify-center items-center pt-10 pb-24 w-full gap-4">
        <div className="flex justify-center items-center w-[40rem] p-2 bg-mainnude rounded-t-full">
          <img src={cover} alt="pic" className="flex border rounded-t-full" />
          <div className=" w-[25rem] h-[20rem] rounded-t-full p-16 -z-30 "></div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-5 font-Cormorant">
          <span className="text-5xl font-bold text-secondtext2 tracking-widest">
            PILATES STUDIO
          </span>
          <span className="text-xl text-thirdtext pt-3 tracking-wide">
            Healthy lifestyle in your life
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 pb-28 px-4">
        <div className="flex flex-col w-[40rem] p-2 gap-4">
          <div className="text-secondtext2 text-3xl font-Cormorant font-semibold px-2">
            WHAT IS PILATES ?...
          </div>
          <div className="text-secondtext2 text-xl font-Cormorant p-4 tracking-wide">
            Pilates is a form of exercise and body conditioning that can improve
            muscle tone, flexibility and strength, as well as help you heal from
            injuries.
          </div>
          <span className="flex p-4 w-[11rem] justify-center border rounded-full text-white text-xl font-semibold bg-secondtext hover:bg-secondtext2 ">
            <Link to="/auth/register">REGISTER</Link>
          </span>
        </div>
        <div className="w-[30rem] bg-mainnude p-2 rounded-3xl">
          <img src={group} alt="pic2" className="border rounded-3xl" />
        </div>
      </div>
      <div className="flex p-5">
        <div className="text-secondtext2 font-semibold font-Cormorant text-3xl p-5 flex justify-center tracking-wider">
          OUR ACTIVITY
        </div>
        <div className="">
          <img src={pilates10} alt="pic3" className="border rounded-xl" />
        </div>
        <div>
          <img src={pilatesmen1} alt="pic4" className="border rounded-xl" />
        </div>
        <div>
          <img src={pilates8} alt="pic5" className="border rounded-xl" />
        </div>
        <div>
          <img src={pilates11} alt="pic5" className="border rounded-xl" />
        </div>
        <div>
          <img src={pilates9} alt="pic5" className="border rounded-xl" />
        </div>
        <div>
          <img src={pilates4} alt="pic5" className="border rounded-xl" />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex overflow-x-auto h-[20rem] gap-1">
          <img src={pilates10} alt="pic3" className="border rounded-xl" />
          <img src={pilatesmen1} alt="pic4" className="border rounded-xl" />
          <img src={pilates8} alt="pic5" className="border rounded-xl" />
          <img src={pilates11} alt="pic5" className="border rounded-xl" />
          <img src={pilates9} alt="pic5" className="border rounded-xl" />
          <img src={pilates4} alt="pic5" className="border rounded-xl" />
        </div> */
}
