import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className=" bg-maingreen rounded-t-full ">
        <div className="flex justify-around text-maintext font-light items-center px-4 py-3 font-Montserrat tracking-widest">
          <div className="flex text-sm font-light">Pilates Studio</div>
          <div className="flex text-sm font-light gap-1 justify-center items-center">
            Copyright
            <FontAwesomeIcon icon={faCopyright} size="sm" />
            2023 | All right reserved
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </div>
        </div>
      </footer>
    </>
  );
}
