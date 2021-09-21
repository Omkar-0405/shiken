const express = require("express");
const router = express.Router();
const formController = require("../../controllers/examForm");
const verifyPermission = require("../../middlewares/permissions");

//  exam form submission by student
router.post("/submit", formController.addForm);
// sending all submitted forms for verification
router.get("/submitted-forms/verify", async (req, res) => {
  const query = req.query;
  console.log(query.Sem === undefined);
  if (query.Department === undefined || query.Sem === undefined) {
    let field = query.Department === undefined ? "Department" : "Sem";
    return res
      .status(203)
      .send({ error: { Message: `${field} not Selected` } });
  }
  let results = await formController.getSubmittedForms(query);

  return res.status(200).send(results);
});
// submission of verified forms
router.post("/forms-verified", formController.verifyForms);
// updation in examforms
router.put("/update-exam-forms", formController.updateForm);

module.exports = router;
