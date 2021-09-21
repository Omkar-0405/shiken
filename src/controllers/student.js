const db = require("../config");
const Student = db.Student;
const bcrypt = require("bcrypt");
const readXlsxFile = require("read-excel-file/node");

// @route     POST api/uploadStudent
// @desc      Test
// @access    Public

const uploadFile = async (req, res) => {
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
      let students = [];
      rows.forEach(async (row) => {
        let student = {
          Roll_No: row[0],
          Email: row[1],
          Password: row[2],
          Role: row[3],
          Last_name: row[4],
          First_Name: row[5],
          Father_Name: row[6],
          Mother_Name: row[7],
          Gender: row[8],
          Branch: row[9],
          Specialization: row[10],

          Category: row[11],
          Dob: row[12],
          Mobile_No: row[13],
          Address: row[14],

          Photograph: row[15],
        };
        students.push(student);
      });
      const moddata = await Promise.all(
        students.map(async function (data) {
          data.Password = await bcrypt.hash(data.Password, 10);
          return data;
        })
      );
      // console.log(moddata)
      Student.bulkCreate(moddata)
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
  uploadFile,
};
