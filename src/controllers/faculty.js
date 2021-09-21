const db = require("../config");
const Faculty = db.Faculty;
const bcrypt = require("bcrypt");
const readXlsxFile = require("read-excel-file/node");

// @route     POST api/uploadfacultydata
// @desc      Test
// @access    Public

const fregister = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).json({
        message: "Upload an excel file",
      });
    }
    let path = __basedir + "/assets/uploads/" + req.file.filename;
    readXlsxFile(path).then(async (rows) => {
      //for eliminating header
      rows.shift();
      let faculties = [];

      rows.forEach(async (row) => {
        let faculty = {
          Sdrn: row[0],
          First_name: row[1],
          Middle_name: row[2],
          Last_name: row[3],
          DOB: row[4],
          Contact_no: row[5],
          Department: row[6],
          Addr: row[7],
          Email: row[8],
          Doj: row[9],
          Qualification: row[10],
          Desig: row[11],
          Password: row[12],
          OTP: row[13],
          Role: row[14],
        };

        faculties.push(faculty);
      });

      const moddata = await Promise.all(
        faculties.map(async function (data) {
          data.Password = await bcrypt.hash(data.Password, 10);
          return data;
        })
      );

      // console.log(moddata);
      Faculty.bulkCreate(moddata)

        .then(() => {
          res.status(200).json({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: "Error Occured!failed to import",
            error: err.message,
          });
        });
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Unable to upload  file: " + req.file.originalname,
    });
  }
};

module.exports = {
  fregister,
};
