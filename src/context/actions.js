import { loginUser, postExamForm } from "../api/api";
import Types from "./types";
import axios from "axios";
// const fetchDataAction = async (dispatch) => {
//   const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
//   const dataJSON = await data.json();
//   return dispatch({
//     type: 'FETCH_DATA',
//     payload: dataJSON._embedded.episodes
//   });
// };

export const testAction = (state, dispatch) => {
  console.log("state in action ", state);

  // call api here if needed
  return dispatch({
    type: "TEST",
    payload: {
      ...state,
      isAuthenticated: true,
      userType: "testing",
      user: { name: "testing done", role: "tester" },
    },
  });
};

export const login = async (user, dispatch) => {
  let userData = await axios
    .post("http://localhost:2000/api/login", user)
    .then((res) => {
      console.log("res sent from api ", res);
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
      // ToastifyDanger( "Authentication Fail" )
    });
  console.log("userData", typeof userData?.token);
  //  userData = {
  //  faculty: {id: 124, Sdrn: 123, First_name: 'JAY', Middle_name: 'SHAFEEN', Last_name: 'GHAYAR', …}
  // message: "Authentication Successful"
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV
  //  }

  //  loginUser(user)
  //  .then({
  // userData = res
  //  })
  // call api here! and pass response as payload
  return dispatch({
    type: Types.LOGIN,
    payload: userData,
  });
  // else call another type in catch i.e LOGIN_FAIL
};

export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};
