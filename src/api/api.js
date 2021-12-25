import axios from "axios";
import { ToastifyDanger, ToastifySuccess } from "../components/Toast/Toastify";

// export const baseURL = "http://localhost:2000/api/";

export const loginUser = (data) => {
  axios
    .post("http://localhost:2000/api/login", data)
    .then((res) => {
      console.log("res sent from api ", res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
      // ToastifyDanger( "Authentication Fail" )
    });
};

export async function postExamForm(URL, student) {
  axios.post(URL, student).then(
    (response) => {
      console.log(response);
      ToastifySuccess("Response Submitted");
    },
    (err) => {
      console.log(err);
      ToastifyDanger("Unsuccessfull");
    }
  );
}

export async function AddSubjApi(URL, AddSubj) {
  axios.post(URL, AddSubj).then(
    (response) => {
      console.log(response);
      ToastifySuccess("Sucessfully Add the Subject");
    },
    (err) => {
      console.log(err);
      ToastifyDanger("Unsuccessfull");
    }
  );
}
