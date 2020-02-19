import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import ExerciseList from "./components/exercises-list.component";
import CreateUser from "./components/create-user.component";
import { UserProvider } from "./contexts/users.context";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <UserProvider>
          <Navbar />
        </UserProvider>
        <br />
        <Switch>
          <Route path="/" render={() => <ExerciseList />} exact />
          <Route path="/create" render={() => <CreateExercise />} exact />
          <Route path="/user" render={() => <CreateUser />} exact />
          <Route path="/edit/:id" render={() => <EditExercise />} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
