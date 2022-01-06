import { loginUser, postExamForm } from "../api/api";
import Types from "./types";
import axios from "axios";
import { ToastifyDanger, ToastifySuccess } from "../components/Toast/Toastify";
export const baseURL = "http://localhost:2000/api";
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
  console.log("api will be called");
  let userData = await axios
    .post("http://localhost:2000/api/login", user)
    .then((res) => {
      console.log("res sent from api ", res);
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
      // return login fail type
    });
  //  userData = {
  //  faculty: {id: 124, Sdrn: 123, First_name: 'JAY', Middle_name: 'SHAFEEN', Last_name: 'GHAYAR', …}
  // message: "Authentication Successful"
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV
  //  }

  if (userData && userData.faculty) {
    return dispatch({
      type: Types.LOGIN_FACULTY,
      payload: userData,
    });
  } else if (userData && userData.student) {
    return dispatch({
      type: Types.LOGIN_STUDENT,
      payload: userData,
    });
  } else {
    ToastifyDanger("Authentication Fail");
    return dispatch({
      type: Types.LOGIN_FAILED,
    });
  }
};

// export const getElectives = async () =>{

// }
export const submitExamForm = async (student, dispatch) => {
  let status = await axios
    .post(
      `${baseURL}/examForm/submit`,
      //"http://localhost:2000/api/examForm/submit"
      // headers if needed
      student
    )
    .then((response) => {
      console.log("res form", response);
      if (response.status == 200) {
        ToastifySuccess("Response Submitted");
        return { formStatus: 1, statusMessage: response.data?.Form_Status };
      } else if (response.status == 203) {
        ToastifyDanger("Form already Submitted"); // warning
      }
      return { formStatus: 1, statusMessage: "Awaiting for Approval" };
    })
    .catch((err) => {
      console.log(err);
      // if res. status: 404 catch it  / Message:
      ToastifyDanger("Unsuccessfull");
      return null;
    });
  if (status) {
    return dispatch({
      type: Types.POST_EXAM_FORM_SUCESS,
      payload: status,
    });
  }
};

export const logout = (dispatch) => {
  console.log("logout");
  return dispatch({
    type: Types.LOGOUT,
  });
};
