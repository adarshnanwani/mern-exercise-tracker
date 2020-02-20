import axios from "axios";

export default async (state, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      const users = await axios.get("http://localhost:5000/users");
      return users;
    case "ADD_USER":
      return state;
    default:
      return state;
  }
};
