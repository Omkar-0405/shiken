const db = require("../config/index.js");
const Permission = db.Permission;

module.exports = async (req, res, next) => {
  const { Access_Name } = req.body;

  try {
    let permission = await Permission.findOne({ where: { Access_Name } });

    if (!permission) {
      return res.status(203).send({ error: { Message: "Permission Denied" } });
    }

    if (permission.Role !== req.user.role) {
      return res.status(203).send({ error: { Message: "Permission Denied" } });
    }

    next();
  } catch (error) {
    res.status(404).send({ error: { Message: "SERVER ERROR" } });
    console.log(error);
  }
};
