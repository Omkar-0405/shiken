const db = require("../config");
const Permission = db.Permission;

module.exports = formController = {
    async addPermission(req, res) {
        const { Access_Name, Role, Api_Path } = req.body;
        try {
            const permission = await Permission.create({ Access_Name, Role, Api_Path });
            return res.status(200).send("Permission created successfully");
        } catch (error) {
            res.status(404).send({ error: { Message: "SERVER ERROR" } });
            console.log(error)
        }
    }
}