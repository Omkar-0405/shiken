const express = require('express');
const { uploadFile, userlogin, Profile } = require('../controllers/user');
const { requireloggedin } = require('../middlewares');
const router = express.Router();
const upload = require("../middlewares/upload");

router.post('/uploaddata', upload.single("file"), uploadFile);
router.post('/signin', userlogin);
router.get('/profile', requireloggedin, Profile)


module.exports = router;