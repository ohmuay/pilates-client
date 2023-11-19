import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import LoginInput from "../attribute/authenticate/LoginInput";
import ErrorMessage from "../attribute/authenticate/ErrorMessage";
import pilateslogin from "../image/pilateslogin.jpg";

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
    login(input)
      .then(() => {
        if (authUser?.role === "USER") navigate("/profile");
        else navigate("/adtransaction");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:max-[2800px]:flex flex-auto justify-around items-center h-[100%] font-Cormorant">
      <div className="md:shrink-0 w-[50rem] bg-mainnude p-2 rounded-3xl">
        <img src={pilateslogin} alt="piclogin" className="flex rounded-3xl" />
      </div>
      <div className="md:flex flex-col justify-center items-center p-8">
        <span className="text-5xl font-semibold text-secondtext2">SIGN IN</span>
        <br />
        <span className="text-xl font-light text-thirdtext p-2">
          Welcome to the world of good health for yourself.
        </span>
        <form
          className="  bg-maingreen flex flex-col justify-center items-center gap-4 p-8 rounded-lg min-w-[34rem] min-h-[16rem]"
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
          <button className="bg-maindark hover:bg-secondtext2 rounded-xl text-white p-2 text-lg font-semibold w-[8rem]">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
