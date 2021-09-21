// Table Model for exam form's submission.
module.exports = (sequelize, DataTypes) => {
  const ExamForm = sequelize.define(
    "ExamForm",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      Roll_No: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        // references: {
        //   model: "students",
        //   key: "Roll_No",
        // },
      },
      First_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Father_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Last_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Mother_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Mobile_No: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sem: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Elective: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      Form_Status: {
        type: DataTypes.STRING,
        defaultValue: "Awaiting for Approval",
      },
      Seat_No: {
        type: DataTypes.BIGINT,
        defaultValue: null,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { tableName: "ExamForms" }
  );
  return ExamForm;
};

// To do :
// subject details
