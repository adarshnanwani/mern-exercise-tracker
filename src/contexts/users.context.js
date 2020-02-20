import React, { createContext, useReducer, useEffect } from "react";
import userReducer from "../reducers/user.reducer";
import useApiRequest from "../hooks/useApiRequest.hook";
export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = props => {
  const [{ status, response }, makeRequest] = useApiRequest(
    "http://localhost:5000/users",
    {
      verb: "get"
    }
  );

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <UserContext.Provider value={response}>
      <UserDispatchContext.Provider>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
