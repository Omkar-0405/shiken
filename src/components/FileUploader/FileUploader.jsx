import axios from "axios";
import React, { useRef } from "react";

import {  ToastContainer } from 'react-toastify';
import { ToastifyDanger, ToastifySuccess } from "../Toast/Toastify";




const FileUploader = () => {

    const val =  useRef()

   let data = new FormData();

    const locateFile = ({target : {files} }) => {
       console.log("e value", files )
        data.append("file", files[0]);
        console.log(data)

        axios.post("http://localhost:2000/api/uploadstudentdata", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res)=>{
            console.log(res.data.message)
            ToastifySuccess(res.data.message)
            
        }, (err) =>  {
           console.log(err) 
           ToastifyDanger(err.message)
           
          }
        )
        setTimeout(() => {
          val.current.value=null  
        }, 3000);
         
    };
    
   

    

    

  return (
    <>
       <div className="row justify-content-center bg-white mt-5">
                <div className="col-md-6 px-1 text-center">
                    <h2>Upload CSV</h2>

                    
                    <p>
                      
                        <input 
                            type="file"
                            className="form-control-file p-5 border"
                            onChange={locateFile}
                            ref={val}
                        />
                         
                    </p>
                    
                   
                </div>
                <ToastContainer/>
              
            </div>
      
    </>
  );
};

export default FileUploader;
