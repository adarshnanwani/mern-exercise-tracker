import { useReducer, useCallback } from "react";
import axios from "axios";
import apiReducer, {
  SUCCESS,
  FETCHING,
  ERROR,
  initialState
} from "../reducers/api.reducer";

const useApiRequest = (endpoint, { verb = "get", params = {} } = {}) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const makeRequest = useCallback(async () => {
    dispatch({ type: FETCHING });
    try {
      const response = await axios[verb](endpoint, params);
      dispatch({ type: SUCCESS, response });
    } catch (e) {
      dispatch({ type: ERROR, response: e });
    }
  }, [endpoint, verb, params]);

  return [state, makeRequest];
};

export default useApiRequest;
