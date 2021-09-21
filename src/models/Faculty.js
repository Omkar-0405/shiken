//Faculty Table Model for all Usages.
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define(
    "Faculty",
    {
      Sdrn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // primaryKey: true,
      },
      First_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Middle_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      Last_name: {
        type: DataTypes.STRING,
        defautValue: null,
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Contact_no: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Addr: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Doj: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Qualification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Desig: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      OTP: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        allowNull: true,
      },
      Role: {
        type: DataTypes.STRING,
        defaultValue: null,
        defaultValue: "faculty",
        allowNull: true,
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
    { tableName: "Faculties" }
  );
  return Faculty;
};
