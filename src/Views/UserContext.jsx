import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(false);

  const login = (userEmail) => {
    setCurrentUser(userEmail);
    localStorage.setItem("loggedInUser", userEmail);
    setToken(true);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedInUser");
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ currentUser, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
