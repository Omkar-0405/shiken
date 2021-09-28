import { postExamForm } from "../api/api";
import Types from "./types";

export const login = (user) => {
    let userData 
//    loginUser(user)
//    .then({
//   userData = res
//    })     // call api here! and pass response as payload
    return {
      type: Types.LOGIN,
      payload: {
        userData
      },
    };

    // else call another type in catch i.e LOGIN_FAIL 
  };

  export const logout = () => {
    return {
      type: Types.LOGOUT,
    };
  };

  