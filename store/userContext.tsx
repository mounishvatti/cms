"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type UserContextType = {
  username: string;
  isLoggedIn: boolean;
  role: string;
  setLoginState: (state: boolean) => void;
  setRole: (role: string) => void;
  clearUserData: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRoleState] = useState("");
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");

  // Initialize from local storage on mount
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedUsername = localStorage.getItem("userName");
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storedToken = localStorage.getItem("token");
    if (storedRole) setRoleState(storedRole);
    if (storedUsername) setUserName(storedUsername);
    if (storedLoginState) setIsLoggedIn(storedLoginState === "true");
    if (storedToken) setToken(storedToken);
  }, []);

  const setRole = (newRole: string) => {
    setRoleState(newRole);
    localStorage.setItem("role", newRole); // Save to local storage
  };

  const setUsername = (newUserName: string) => {
    setUserName(newUserName);
    localStorage.setItem("userName", newUserName); // Save to local storage
  };
  const setLoginState = (state: boolean) => {
    setIsLoggedIn(state);
    localStorage.setItem("isLoggedIn", state.toString()); // Save to local storage
  };

  const setTokenValue = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token); // Save to local storage
  };

  const clearUserData = () => {
    setRoleState("");
    setIsLoggedIn(false);
    setUsername("");
    setToken("");
    localStorage.removeItem("role");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        username: userName,
        isLoggedIn,
        role,
        setLoginState,
        setRole,
        clearUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};