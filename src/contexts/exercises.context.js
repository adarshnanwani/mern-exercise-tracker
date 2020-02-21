import React, { createContext, useReducer } from "react";
import exerciseReducer, {
  reducerMiddleware
} from "../reducers/exercise.reducer";

export const ExerciseContext = createContext();
export const ExerciseDispatchContext = createContext();

export const ExerciseProvider = props => {
  const [exercises, dispatch] = useReducer(exerciseReducer, []);
  const dispatchMiddleware = reducerMiddleware(dispatch);
  return (
    <ExerciseContext.Provider value={exercises}>
      <ExerciseDispatchContext.Provider value={dispatchMiddleware}>
        {props.children}
      </ExerciseDispatchContext.Provider>
    </ExerciseContext.Provider>
  );
};
