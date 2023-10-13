import { useState } from "react";
import { useAuth } from "../hooks/use-auth.js";
import registerSchema from "../validation/auth-valudate.js";
import RegisterInput from "../attribute/authenticate/RegisterInput.jsx";
import ErrorMessage from "../attribute/authenticate/ErrorMessage.jsx";

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
    profileImg: "",
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
    <div className="flex">
      <div>
        <img
          src="https://i0.wp.com/wewellnessclinic.com/home/wp-content/uploads/2023/09/NAN_0497-copy-1.jpg?fit=1814%2C1207&ssl=1"
          alt="pic"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-10 gap-5">
        <span className="text-4xl font-semibold text-maintext">
          Create New Account
        </span>
        <span className="text-xl font-light text-thirdtext">
          Welcome to the world of good health for yourself.
        </span>

        <form
          onSubmit={handleSubmitForm}
          className="bg-maingreen flex flex-col gap-5 p-8 rounded-lg min-w-[35rem] min-h-[15rem]"
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
          <RegisterInput
            type="text"
            placeholder="Img"
            name="profileImg"
            value={input.profileImg}
            onChange={handleInput}
          />
          <div className="mx-auto col-span-full">
            <button className="bg-maindark rounded-lg text-white p-2 text-lg font-semibold min-w-[15rem]">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
