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
      .get(`${process.env.REACT_APP_URL_BACKEND}/api/posts/get/data`)
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
