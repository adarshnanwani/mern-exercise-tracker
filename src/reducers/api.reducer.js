export const FETCHING = `FETCHING`;
export const SUCCESS = `SUCCESS`;
export const ERROR = `ERROR`;

export const initialState = {
  status: null,
  response: null
};

export default function(state, action) {
  switch (action.type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, response: action.response };
    case ERROR:
      return { ...state, status: ERROR, response: action.response };
    default:
      return state;
  }
}
