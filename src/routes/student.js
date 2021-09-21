const express = require('express');
const { uploadFile } = require('../controllers/student');
const router = express.Router();
const upload = require("../middlewares/upload");

router.post('/uploadstudentdata', upload.single("file"), uploadFile)

module.exports = router;