import React, { useContext, useEffect } from "react";
import useInputState from "../hooks/useInputState.hook";
import { UserDispatchContext } from "../contexts/users.context";

const CreateUser = () => {
  const [username, setUsername, resetUsername] = useInputState();
  const dispatch = useContext(UserDispatchContext);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NEW_USER", username: username });
    resetUsername();
  };

  useEffect(() => {
    dispatch({ type: "GET_ALL_USERS" });
  }, []);
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={setUsername}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
