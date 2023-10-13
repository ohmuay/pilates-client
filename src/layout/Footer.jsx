import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="bg-maingreen">
        <div className="flex justify-between text-maintext font-light text-base items-center px-4 py-2">
          <div className="flex text-sm font-light">Pilates Studio</div>
          <div className="flex text-sm font-light gap-1 justify-center items-center">
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
