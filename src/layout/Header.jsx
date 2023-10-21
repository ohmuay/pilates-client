import { Link } from "react-router-dom";
import { getAccessToken } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import logo2 from "../image/logo2.png";

export default function Header() {
  const navigate = useNavigate();

  const { authUser, logout } = useAuth();

  return (
    <header
      className="flex justify-around items-center text-maintext bg-maingreen
    fixed top-0 left-0 right-0 z-30"
    >
      <div className=" flex justify-center items-center text-base font-medium font-Montserrat tracking-widest">
        <img src={logo2} alt="logo" className="h-14 w-14 rounded-full" />
        PILATES STUDIO
      </div>
      <ul className="text-base flex flex-row gap-10 font-Montserrat font-medium">
        {getAccessToken() ? (
          authUser?.role == "USER" ? (
            <>
              <li className="hover:text-secondtext2">
                <Link to="/profile">PROFILE</Link>
              </li>
              <li className="hover:text-secondtext2">
                <Link to="/applyclass">APPLYCLASS</Link>
              </li>
              <li
                className="hover:text-secondtext2"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                LOGOUT
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-secondtext2">
                <Link to="/adtransaction">TRANSACTION</Link>
              </li>
              <li className="hover:text-secondtext2">
                <Link to="/adclassroom">CLASSROOM</Link>
              </li>
              <li className="hover:text-secondtext2">
                <Link to="/adreserve">RESERVATION</Link>
              </li>
              <li className="hover:text-secondtext2">
                <Link to="/admember">MEMBER</Link>
              </li>
              <li
                className="hover:text-secondtext2"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                LOGOUT
              </li>
            </>
          )
        ) : (
          <>
            <li className="hover:text-secondtext2">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-secondtext2">
              <Link to="/auth/login">LOGIN</Link>
            </li>
            <li className="hover:text-secondtext2">
              <Link to="/auth/register">REGISTER</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
