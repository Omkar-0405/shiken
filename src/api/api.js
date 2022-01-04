import axios from "axios";
import { ToastifyDanger, ToastifySuccess } from "../components/Toast/Toastify";
const baseURL = "http://localhost:2000/api";
let headers = {
  "Content-Type": "application/json",
};

export const loginUser = async (data) => {
  await axios
    .post(`${baseURL}/login`, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export async function postExamFormApi(student) {
  await axios
    .post(
      `${baseURL}/examForm/submit`,
      student
      // pass headers
    )
    .then(
      (response) => {
        console.log("form submit res", response);
        ToastifySuccess("Response Submitted");
        return response;
      },
      (err) => {
        console.log(err);
        ToastifyDanger("Unsuccessfull, Try Again");
        return null;
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
