import axios from "axios";


var exam_form= null;
export const baseURL = "http://localhost:2000/api/";

export async function Submit_Examform() {
axios
.post(baseURL +`examForm/submit`, exam_form)
.then((response) => {
console.log(response);
}, (err)=> {return console.log(err) } );

}