import { useEffect } from "react";
import * as ActionType from "../content/content";
import API from "../../../../../axios/API";

// export const emitOpenSignUp = (openSU) => {
//   console.log(openSU);
//   return {
//     type: ActionType.SIGNUP,
//     data: openSU,
//   };
// };
export const handleUserName = (e, dispatch) => {
  const { value } = e.target;
  dispatch({ type: ActionType.GET_USER_NAME, payload: value });
};
export const handleUserEmail = (e, dispatch) => {
  const { value } = e.target;
  dispatch({ type: ActionType.GET_USER_EMAIL, payload: value });
};
export const handleUserPassword = (e, dispatch) => {
  const { value } = e.target;
  dispatch({ type: ActionType.GET_USER_PASSWORD, payload: value });
};
export const handleUserAge = (e, dispatch) => {
  const { value } = e.target;
  dispatch({ type: ActionType.GET_USER_AGE, payload: value });
};
export const createNewUser = async (data) => {
  try {
    const res = await API("users/create", "POST", data);
    if (res === !201) {
      // alert("sucess")
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  } catch (err) {
    console.log(err);
  }
};
