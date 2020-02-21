import axios from "axios";

export function reducerMiddleware(dispatch) {
  return async action => {
    switch (action.type) {
      case "GET_ALL_EXERCISES":
        try {
          const res = await axios.get("http://localhost:5000/exercises");
          dispatch({ type: action.type, exercises: res.data });
        } catch (e) {
          console.log("error: " + e);
        }
        break;
      case "ADD_NEW_EXERCISE":
        try {
          const res = await axios.post(
            "http://localhost:5000/exercises/add",
            action.newExercise
          );
          dispatch({ type: action.type, newExercise: res.data });
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
    case "GET_ALL_EXERCISES":
      return [...state, ...action.exercises];
    case "ADD_NEW_EXERCISE":
      return [...state, action.newExercise];
    default:
      return state;
  }
}

export default reducer;
