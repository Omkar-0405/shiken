const express = require('express');
const router = express.Router();
const permissionController = require('../../controllers/permission');

router.post('/create', permissionController.addPermission);

module.exports = router;