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
      <footer className=" bg-mainnude">
        <div className="flex justify-around text-maintext text-lg items-center px-4 py-3 font-Montserrat tracking-widest">
          <div className="flex text-sm">Pilates Studio</div>
          <div className="flex text-sm  gap-1 justify-center items-center">
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
