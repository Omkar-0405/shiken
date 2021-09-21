//User Model for authentication which will be taken from excel file
module.exports = (sequelize, DataTypes) => {
    const Userdata = sequelize.define('User', {
        MyDy_Id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Roll_No: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Mobile_No: {
            type: DataTypes.INTEGER
        },
        role: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [
                        ['student', 'faculty', 'admin', 'data_entry_operator', 'super_admin', 'hod']
                    ],
                    message: "Fill appropriate role"
                }
            }
        },
        // to be added as a foreign keys 

        // -> Sudent_id

        // -> Faulty_id

    }, { tableName: 'Users' });
    return Userdata;
}

