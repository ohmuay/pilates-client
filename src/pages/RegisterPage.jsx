import { useState } from "react";
import { useAuth } from "../hooks/use-auth.js";
import registerSchema from "../validation/auth-valudate.js";
import RegisterInput from "../attribute/authenticate/RegisterInput.jsx";
import ErrorMessage from "../attribute/authenticate/ErrorMessage.jsx";
import pilateslogin from "../image/pilateslogin.jpg";

const validateRegister = (input) => {
  console.log(input);
  const { error } = registerSchema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, []);
    return result;
  }
};

export default function RegisterPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmpassword: "",
    email: "",
    mobile: "",
    //profileImg: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex justify-center items-center h-[100%] font-sans text-maintext">
      <div className="w-[800px] bg-mainnude p-4 rounded-3xl">
        <img src={pilateslogin} alt="pic" className="flex rounded-3xl" />
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <span className="text-4xl font-semibold text-secondtext2">
          Create New Account
        </span>
        <span className="text-xl font-light text-thirdtext p-2">
          Welcome to the world of good health for yourself.
        </span>

        <form
          onSubmit={handleSubmitForm}
          className="bg-mainvanilla bg-opacity-80 flex flex-col justify-center items-center gap-4 p-6 rounded-lg min-w-[34rem] min-h-[16rem]"
        >
          <RegisterInput
            type="text"
            placeholder="Firstname"
            name="firstName"
            value={input.firstName}
            onChange={handleInput}
            Error={error.firstName}
          />
          {error.firstName && <ErrorMessage message="Firstname is required" />}
          <RegisterInput
            type="text"
            placeholder="Lastname"
            name="lastName"
            value={input.lastName}
            onChange={handleInput}
            Error={error.lastName}
          />
          {error.lastName && <ErrorMessage message="Lastname is required" />}
          <RegisterInput
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleInput}
            Error={error.password}
          />
          {error.password && <ErrorMessage message="Password is required" />}
          <RegisterInput
            type="password"
            placeholder="Confirmpassword"
            name="confirmpassword"
            value={input.confirmpassword}
            onChange={handleInput}
            Error={error.confirmpassword}
          />
          {error.confirmpassword && (
            <ErrorMessage message="Confirmpassword don't match" />
          )}
          <RegisterInput
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInput}
            Error={error.email}
          />
          {error.email && <ErrorMessage message="Email is required" />}
          <RegisterInput
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={input.mobile}
            onChange={handleInput}
            Error={error.mobile}
          />
          {error.mobile && <ErrorMessage message="Mobile is required" />}
          {/* <RegisterInput
            type="text"
            placeholder="Img"
            name="profileImg"
            value={input.profileImg}
            onChange={handleInput}
          /> */}
          <button className="bg-maindark hover:bg-secondtext2 rounded-lg text-white p-2 text-base font-medium w-[100px]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
