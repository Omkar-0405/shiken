import axios from "axios";


// export const baseURL = "http://localhost:2000/api/";

export async function postExamForm(URL, student) {
    
axios.post(URL, student )
.then((response) => {
console.log(response);
}, (err)=> {return console.log(err) } );

}

export async function AddSubjApi(URL, AddSubj){

    axios.post(URL, AddSubj )
    .then((response) => {
    console.log(response);
    }, (err)=> {return console.log(err) } );


}