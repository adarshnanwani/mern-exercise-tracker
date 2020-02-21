import axios from "axios";

export function reducerMiddleware(dispatch) {
  return async action => {
    switch (action.type) {
      case "GET_ALL_USERS":
        try {
          const res = await axios.get("http://localhost:5000/users");
          dispatch({ type: action.type, users: res.data });
        } catch (e) {
          console.log("error: " + e);
        }
        break;
      case "ADD_NEW_USER":
        try {
          const res = await axios.post("http://localhost:5000/users/add", {
            username: action.username
          });
          dispatch({ type: action.type, users: res.data });
        } catch (e) {
          console.log("error: " + e);
        }
        break;
      default:
        return action;
    }
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return [...state, ...action.users];
    case "ADD_NEW_USER":
      return state;
    default:
      return state;
  }
}

export default reducer;
