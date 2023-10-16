import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="bg-maingreen">
        <div className="flex justify-between text-maintext font-light items-center px-4 py-5">
          <div className="flex text-l font-light">Pilates Studio</div>
          <div className="flex text-l font-light gap-1 justify-center items-center">
            Copyright
            <FontAwesomeIcon icon={faCopyright} size="sm" />
            2023
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
}
