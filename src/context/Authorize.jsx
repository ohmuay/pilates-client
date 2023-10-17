import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const Authorize = createContext();

export default function AuthorizeProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    //  console.log(getAccessToken());
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  const login = async (loginInput) => {
    try {
      const res = await axios.post("/auth/login", loginInput);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (registerInput) => {
    console.log(registerInput);
    const res = await axios.post("/auth/register", registerInput);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <Authorize.Provider value={{ login, authUser, register, logout }}>
      {children}
    </Authorize.Provider>
  );
}
