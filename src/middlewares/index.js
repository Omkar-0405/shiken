// add your middleware functions over here
const jwt = require("jsonwebtoken");

exports.requireloggedin = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, `${process.env.SECRET_KEY}`);
            req.user = user;
        } else {
            console.log(error)
            return res.status(500).json({ error });
        }
        next();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};