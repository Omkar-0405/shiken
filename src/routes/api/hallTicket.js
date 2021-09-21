const express = require('express');
const router = express.Router();
const hallTicketController = require('../../controllers/hallTicket');
const verifyPermission = require("../../middlewares/permissions");


router.get('/', hallTicketController.get);

module.exports = router;