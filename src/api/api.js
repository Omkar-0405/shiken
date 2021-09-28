import axios from "axios";

// var exam_form= null;
// export const baseURL = "http://localhost:2000/api/";

export async function postExamForm(URL, student) {
    
axios.post(URL, student )
.then((response) => {
console.log(response);
}, (err)=> {return console.log(err) } );

}