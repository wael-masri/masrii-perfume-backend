import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./Typesfetch";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const Reducerfetch = (state = initialState, action) => {
  switch (action.type) {
    //request
    case FETCH_DATA_REQUEST:
      const actionrequest = {
        ...state,
        loading: true,
      };
      return actionrequest;

    //success
    case FETCH_DATA_SUCCESS:
      const actionsuccess = {
        loading: false,
        error: "",
        data: action.payload,
      };
      return actionsuccess;

    //failure
    case FETCH_DATA_FAILURE:
      const actionfailure = {
        loading: false,
        error: action.payload,
        data: [],
      };
      return actionfailure;

    default:
      return state;
  }
};

export default Reducerfetch;
