import { postExamForm } from "../api/api";
import Types from "./types";

export const login = (user) => {
    // postExamForm(user)      //CALL API HERE! 
    return {
      type: Types.LOGIN,
      payload: {
        // userType,
      },
    };
  };

  export const logout = () => {
    return {
      type: Types.LOGOUT,
    };
  };

  