import * as Action from "../Action/action";
import {
  GET_USER_AGE,
  GET_USER_EMAIL,
  GET_USER_NAME,
  GET_USER_PASSWORD,
} from "../Content/content";
const userLocal=JSON.parse(localStorage.getItem("user"))
let initState = {
  user:userLocal,
  openSu: false,
  users: {
    name: "",
    email: "",
    password: "",
    age: 0,
    userType: "user",
  },
};
const reducerSignUp = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {
        ...state,
        users: {
          ...state.users,
          name: action.payload,
        },
      };
    case GET_USER_EMAIL:
      return {
        ...state,
        users: {
          ...state.users,
          email: action.payload,
        },
      };
    case GET_USER_PASSWORD:
      return {
        ...state,
        users: {
          ...state.users,
          password: action.payload,
        },
      };
    case GET_USER_AGE:
      return {
        ...state,
        users: {
          ...state.users,
          age: action.payload,
        },
      };
    default:
      return { ...state };
  }
};
export default reducerSignUp