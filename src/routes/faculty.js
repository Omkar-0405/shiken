const express = require("express");
const { fregister } = require("../controllers/faculty");
const router = express.Router();
const upload = require("../middlewares/upload");
router.post("/facultyregister", upload.single("file"), fregister);
module.exports = router;
