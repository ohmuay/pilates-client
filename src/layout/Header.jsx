import { Link } from "react-router-dom";
import { removeAccessToken, getAccessToken } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="flex justify-between items-center px-10 py-5 text-maintext bg-maingreen 
    fixed top-0 left-0 right-0 z-30"
    >
      <div className="text-3xl font-semibold drop-shadow-lg">
        PILATES STUDIO
      </div>
      <ul className="text-xl flex flex-row gap-10">
        <li className="hover:text-secondtext2 font-semibold">
          <Link to="/">HOME</Link>
        </li>
        {getAccessToken() ? (
          <>
            <li className="hover:text-secondtext2 font-semibold">
              <Link to="/profile">PROFILE</Link>
            </li>
            <li className="hover:text-secondtext2 font-semibold">
              <Link to="/applyclass">APPLYCLASS</Link>
            </li>
            <li className="hover:text-secondtext2 font-semibold">
              <Link to="/reservation">RESERVATION</Link>
            </li>
            <li
              className="cursor-pointer hover:text-secondtext2 font-semibold"
              onClick={() => {
                removeAccessToken();
                navigate("/");
              }}
            >
              LOGOUT
            </li>
          </>
        ) : (
          <>
            <li className="hover:text-secondtext2 font-semibold">
              <Link to="/auth/login">LOGIN</Link>
            </li>
            <li className="hover:text-secondtext2 font-semibold">
              <Link to="/auth/register">REGISTER</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
