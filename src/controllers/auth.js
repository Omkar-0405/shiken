const db = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = db.Student;
const Faculty = db.Faculty;

const login = async (req, res) => {
  if (req.body.usertype == "student") {
    Student.findOne({
      where: {
        Roll_No: req.body.rollno,
      },
    })
      .then(async (student) => {
        if (!student) {
          return res.status(401).json({
            message: "Ooops your Roll_No doesn't exists!!",
          });
        }
        const result = bcrypt.compareSync(req.body.password, student.Password);
        console.log(result);
        if (!result) {
          res.status(401).json({
            message: "Authentication failed",
          });
        } else {
          const token = jwt.sign(
            { role: student.Role, roll_no: student.Roll_No },
            `${process.env.SECRET_KEY}`,
            { expiresIn: "1d" }
          );
          return res.status(200).json({
            message: "Authentication Successful",
            token,
            student,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "student not found",
          error: err,
        });
      });
  } else {
    Faculty.findOne({
      where: {
        Sdrn: req.body.sdrn,
      },
    })
      .then(async (faculty) => {
        if (!faculty) {
          return res.status(401).json({
            message: "Ooops your Sdrn doesn't exists!!",
          });
        }
        const result = bcrypt.compareSync(req.body.password, faculty.Password);
        console.log(result);
        if (!result) {
          res.status(401).json({
            message: "Authentication failed",
          });
        } else {
          const token = jwt.sign(
            { role: faculty.Role, sdrn: faculty.Sdrn },
            `${process.env.SECRET_KEY}`,
            { expiresIn: "1d" }
          );
          return res.status(200).json({
            message: "Authentication Successful",
            token,
            faculty,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "faculty not found",
          error: err,
        });
      });
  }
};

module.exports = {
  login,
};
