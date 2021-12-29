import axios from "axios";
import { ToastifyDanger, ToastifySuccess } from "../components/Toast/Toastify";
const baseURL = "http://localhost:2000/api/";
let headers = {
  "Content-Type": "application/json",
};

export const loginUser = async (data) => {
  const response = await axios.post(`${baseURL}/login`, data);
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
