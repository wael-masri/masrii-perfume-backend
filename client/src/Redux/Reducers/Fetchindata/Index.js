import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../ActionFetch";

import axios from "axios";

export const fetchdata = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get("/api/posts/get/data")
      .then((response) => {
        const data_fetching = response.data;

        dispatch(fetchDataSuccess(data_fetching));
      })
      .catch((error) => {
        const msg = error.message;
        dispatch(fetchDataFailure(msg));
      });
  };
};
