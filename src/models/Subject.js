//Subject Table Model for All Usages
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    "Subject",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subject_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subject_shortname: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Subject",
      },
      Year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Elective: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { tableName: "Subjects" }
  );
  return Subject;
};

