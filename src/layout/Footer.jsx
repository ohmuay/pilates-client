import {
  faCopyright,
  faAddressBook,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="border-t-2 border-maingreen">
        <div className="flex justify-around text-maintext font-light items-center px-4 py-3 font-Montserrat tracking-widest">
          <div className="flex text-sm font-light">Pilates Studio</div>
          <div className="flex text-sm font-light gap-1 justify-center items-center">
            Copyright
            <FontAwesomeIcon icon={faCopyright} size="sm" />
            2023
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faHeadphonesAlt} size="sm" />
            <FontAwesomeIcon icon={faAddressBook} size="sm" />
            <FontAwesomeIcon icon={faMessage} size="sm" />
          </div>
        </div>
      </footer>
    </>
  );
}
