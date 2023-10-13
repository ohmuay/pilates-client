import { Link } from "react-router-dom";
import { removeAccessToken, getAccessToken } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center px-10 py-4 bg-m text-maintext bg-maingreen">
      <div className="text-3xl font-semibold">Pilates Studio</div>
      <ul className="text-xl flex flex-row gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        {getAccessToken() ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/applyclass">Applyclass</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                removeAccessToken();
                navigate("/");
              }}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
