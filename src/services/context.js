import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // eslint-disable-next-line
  const [token, setToken] = useState(
    window.localStorage.getItem("TOKEN") || null
  );

  useEffect(() => {
    async function loadUser() {
      if (token !== null && token !== "undefined") {
        const { data } = await api.get(`/user/token/${token}`);
        setUser(data);
      }
    }
    loadUser();
  }, [token]);

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};
