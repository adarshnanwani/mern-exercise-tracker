import React, { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import useInputState from "../hooks/useInputState.hook";
import { UserContext } from "../contexts/users.context";
import { ExerciseDispatchContext } from "../contexts/exercises.context";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const dispatch = useContext(ExerciseDispatchContext);
  const users = useContext(UserContext);
  const [username, setUsername] = useInputState();
  const [description, setDescription, resetDescription] = useInputState();
  const [duration, setDuration, resetDuration] = useInputState();
  const [date, setDate] = useState();
  console.log("CE", users);

  const onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date: date
    };
    dispatch({
      type: "ADD_NEW_EXERCISE",
      newExercise: exercise
    });
    resetDescription();
    resetDuration();
  };
  useEffect(() => {
    setDate(new Date());
    dispatch({ type: "GET_ALL_USERS" });
  }, []);

  const page =
    users.users.length > 0 ? (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select
              className="form-control"
              value={username}
              onChange={setUsername}
            >
              {users.users
                ? users.users.map(user => (
                    <option key={user._id} value={user.username}>
                      {user.username}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={setDescription}
              required
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes):</label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={setDuration}
              min={1}
              required
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker selected={date} onChange={val => setDate(val)} />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    ) : null;

  return page;
};

export default CreateExercise;
