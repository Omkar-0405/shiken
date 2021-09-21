const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
//creating a database connection
const sequelize = new Sequelize("examsoftware", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync().then(() => {
  console.log("resync");
});

//configuring models

db.Student = require("../models/Student")(sequelize, DataTypes);
db.Faculty = require("../models/Faculty")(sequelize, DataTypes);
db.Subject = require("../models/Subject")(sequelize, DataTypes);
db.ExamForm = require("../models/ExamForm")(sequelize, DataTypes);
db.Permission = require("../models/Permission")(sequelize, DataTypes);

module.exports = db;
