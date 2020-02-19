import React, { createContext, useReducer, useEffect } from "react";
import userReducer from "../reducers/user.reducer";

export const UserContext = createContext();

export const UserProvider = props => {
  const [users, dispatch] = useReducer(userReducer, [{ name: "john" }]);
  useEffect(() => {}, [users]);
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};
