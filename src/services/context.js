import React, { useState, useContext, useEffect } from "react";

export const AccountContext = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {}
    loadUser();
  }, []);

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};
