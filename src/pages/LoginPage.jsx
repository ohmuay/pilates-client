import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import LoginInput from "../attribute/authenticate/LoginInput";
import Joi from "joi";
import ErrorMessage from "../attribute/authenticate/ErrorMessage";
import { useNavigate } from "react-router-dom";

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{5,20}$/)
    .trim()
    .required(),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, []);
    return result;
  }
};

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const { login, authUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    login(input).catch((err) => console.log(err));
    if (authUser) navigate("/profile");
  };

  return (
    <div className="flex">
      <div className="">
        <img
          src="https://i0.wp.com/wewellnessclinic.com/home/wp-content/uploads/2023/09/NAN_0497-copy-1.jpg?fit=1814%2C1207&ssl=1"
          alt="pic"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-10 gap-5">
        <span className="text-5xl font-semibold text-maindark">Sign In</span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>
        <form
          className="  bg-maingreen flex flex-col gap-5 p-8 rounded-lg min-w-[35rem] min-h-[15rem]"
          onSubmit={handleSubmitForm}
        >
          <LoginInput
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeLogin}
            Error={error.email}
          />
          {error.email && <ErrorMessage message="Email is required" />}
          <LoginInput
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeLogin}
            Error={error.password}
          />
          {error.password && <ErrorMessage message="Password is required" />}
          <div className="mx-auto col-span-full">
            <button className="bg-maindark rounded-lg text-white p-2 text-lg font-semibold min-w-[10rem]">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
