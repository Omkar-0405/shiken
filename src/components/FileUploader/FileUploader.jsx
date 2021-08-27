import React, { useRef, useState } from "react";
import * as Fa  from "react-icons/fa";
// import useFileDownloader from "hooks/useFileDownloader";
import { ProgressBar } from "react-bootstrap";
const files = [
  {
    name: "Upload CSV",
    
    
  }
];

const FileUploader = () => {

    const [uploadPercentage, setUploadPercentage] = useState(0);
    const cancelFileUpload = useRef(null);

    const uploadFile = ({ target: { files } }) => {
        let data = new FormData();
        data.append("file", files[0]);

        const options = {
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;

                let percent = Math.floor((loaded * 100) / total);

                if (percent < 100) {
                    setUploadPercentage(percent);
                }
            },
            
        };
 
    };

    const cancelUpload = () => {
        if (cancelFileUpload.current)
            cancelFileUpload.current("User has canceled the file upload.");
    };

  return (
    <>
       <div className="row justify-content-center bg-light">
                <div className="col-md-6 px-1 text-center">
                    <h2>Upload CSV</h2>

                    
                    <p>
                        <input 
                            type="file"
                            className="form-control-file p-5 border"
                            onChange={uploadFile}
                        />
                    </p>
                    {uploadPercentage > 0 && (
                        <div className="row mt-3">
                            <div className="col pt-1">
                                <ProgressBar
                                    now={uploadPercentage}
                                    striped={true}
                                    label={`${uploadPercentage}%`}
                                />
                            </div>
                            <div className="col-auto">
                                <span
                                    className="text-primary cursor-pointer"
                                    onClick={() => cancelUpload()}
                                >
                                    Cancel
                                </span>
                            </div>
                        </div>
                    )}
                   
                </div>
            </div>
      
    </>
  );
};

export default FileUploader;
