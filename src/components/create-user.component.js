import React from "react";
import useInputState from "../hooks/useInputState.hooks";

const CreateUser = () => {
  const [username, setUsername, resetUsername] = useInputState();
  const [description, setDescription, resetDescription] = useInputState();
  const [duration, setDuration, resetDuration] = useInputState();

  const onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date: new Date()
    };
    console.log(exercise);
    window.location = "/";
  };

  return (
    <div>
      <p>You are on Create User page</p>
    </div>
  );
};

export default CreateUser;
