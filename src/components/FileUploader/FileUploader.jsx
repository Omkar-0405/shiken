import axios from "axios";
import React, { useRef, useState } from "react";
// import * as Fa  from "react-icons/fa";
// import useFileDownloader from "hooks/useFileDownloader";
import { ProgressBar } from "react-bootstrap";
const files = [
  {
    name: "Upload CSV",
    
    
  }
];

const FileUploader = () => {

    
   let data = new FormData();

    const locateFile = ({ target: { files } }) => {
       
        data.append("file", files[0]);
 
    };

    const uploadFile = async () => {
        
      await axios("http://localhost:2000/api/uploadstudentdata", data.get("file"))
        .then((res)=>{
            console.log(res)
        }, (err) => console.log(err))

    }

    

  return (
    <>
       <div className="row justify-content-center bg-light">
                <div className="col-md-6 px-1 text-center">
                    <h2>Upload CSV</h2>

                    
                    <p>
                      <form action="" onSubmit={uploadFile} method="POST">
                        <input 
                            type="file"
                            className="form-control-file p-5 border"
                            onChange={locateFile}
                        />

                        <button type="submit">
                            Upload
                        </button>
                       </form>   
                    </p>
                    
                   
                </div>
            </div>
      
    </>
  );
};

export default FileUploader;
