const db = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = db.user;
const readXlsxFile = require("read-excel-file/node");

const generateToken = (mydyid, role) => {
  return jwt.sign(
    { mydyid, role },

    `${process.env.SECRET_KEY}`,
    { expiresIn: "1d" }
  );
};

// @route     POST api/uploaduserdata
// @desc      Uploading user excel data
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
      let users = [];
      rows.forEach((row) => {
        let user = {
          MyDy_Id: row[0],
          Email: row[1],
          Password: row[2],
          Roll_No: row[3],
          FirstName: row[4],
          Surname: row[5],
          Mobile_No: row[6],
          role: row[7],
        };
        users.push(user);
      });
      const moddata = await Promise.all(
        users.map(async function (data) {
          data.Password = await bcrypt.hash(data.Password, 10);
          return data;
        })
      );
      // console.log(moddata)
      Users.bulkCreate(moddata)
        .then(() => {
          res.status(200).json({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((err) => {
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

// @route     POST api/signin
// @desc      User login Route
// @access    Public

const userlogin = async (req, res) => {
  Users.findOne({
    where: {
      MyDy_Id: req.body.mydy,
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.status(401).json({
          message: "Ooops your MyDy_id doesn't exists!!",
        });
      }
      const result = bcrypt.compareSync(req.body.password, user.Password);
      console.log(result);
      if (!result) {
        res.status(401).json({
          message: "Authentication failed",
        });
      } else {
        const token = generateToken(user.MyDy_Id, user.role);
        return res.status(200).json({
          message: "Authentication Successful",
          token,
          user,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "user not found",
        error: err,
      });
    });
};

// @route     POST api/profile
// @desc      Profile Route for testing requireloggedin middleware
// @access    Public

const Profile = async (req, res) => {
  const user = req.user;
  res.status(200).json({
    user,
  });
};

module.exports = {
  uploadFile,
  userlogin,
  Profile,
};
