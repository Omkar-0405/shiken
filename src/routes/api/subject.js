const { query } = require('express');
const express = require('express');
const router = express.Router();
const subjectController = require('../../controllers/subject');
const verifyPermission = require("../../middlewares/permissions");

router.post('/addSubject', subjectController.addSubject);

// get all subjects {Branch,Semester}
router.get('/getSubjects', async(req,res)=> {
    const query = req.query;
    
    const subjects = await subjectController.getSubjects(query);

    return res.status(200).send(subjects);
});




module.exports = router;