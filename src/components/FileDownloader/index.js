import axios from "axios";
import React from "react";
import { FaDownload } from "react-icons/fa";
// import useFileDownloader from "hooks/useFileDownloader";

const files = [
  {
    name: "Hall Ticket",
    
    // file:
    //   "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
    //   Math.random(),
    // filename: "Hall Ticket.jpg",
  }
];

const FileDownloader = () => {
  // const [downloadFile, downloaderComponentUI] = useFileDownloader();

  // const download = (file) => downloadFile(file);

  const download  = () => {
    axios.request({

      url : " http://localhost:2000/api/hallTicket/?Department=EXTC&Sem=5 ",
      method: "GET" ,
      responseType: 'blob', //important

    })

    .then(({ data }) => {

      const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'file.pdf'); //any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();

    })
    .catch((err) => {
        console.log(err)
    })

  }


  return (
    <>
      {/* <Header title="" /> */}


      <div className="row">
        <div className="col text-center">
          <h2>DOWNLOAD HALL TICKET</h2>
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card ">
                  <div className="card-body" key={idx}>
                    <img className="card-img-top mb-3" alt="" src={file.thumb} />
                    <h5 className="card-title">{file.name}</h5>

                    <div
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={download}
                    >
                      Download <FaDownload  />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* {downloaderComponentUI} */}
      </div>
    </>
  );
};

export default FileDownloader;
