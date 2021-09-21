//Student Table Model for all Usages.
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      Roll_No: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "student",
      },
      Last_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      First_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Father_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Mother_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gender: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["male", "female", "others"]],
            message: "Fill appropriate gender",
          },
        },
      },
      Branch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Specialization: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Category: {
        type: DataTypes.STRING,
      },
      Dob: {
        type: DataTypes.DATE,
      },
      Mobile_No: {
        type: DataTypes.BIGINT,
      },
      Address: {
        type: DataTypes.STRING,
      },
      Photograph: {
        type: DataTypes.STRING,
      },
      // createdAt: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
    },
    { tableName: "Students" }
  );
  return Student;
};
