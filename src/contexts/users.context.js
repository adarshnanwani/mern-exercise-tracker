import React, { createContext, useReducer, useEffect } from "react";
import userReducer, { reducerMiddleware } from "../reducers/user.reducer";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = props => {
  const [users, dispatch] = useReducer(userReducer, []);
  const dispatchMiddleware = reducerMiddleware(dispatch);

  // Below code is needed because users don't
  // load when I refresh the Create New Exercise Log page
  useEffect(() => {
    dispatchMiddleware({ type: "GET_ALL_USERS" });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <UserDispatchContext.Provider value={dispatchMiddleware}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
