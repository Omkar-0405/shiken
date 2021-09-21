const db = require("../config");
const { getSubjects } = require("./subject");
const ExamForm = db.ExamForm;
const pdf = require("html-pdf");
const pdfTemplate = require("../../documents");

const verifyCheck = (form) => {
  if (form.Form_Status === "Approved") {
    return true;
  } else return false;
};

module.exports = hallTicketController = {
  async get(req, res) {
    const query = req.query;

    try {
      let formData = await ExamForm.findOne({ where: query });
      if (!formData) {
        return res.status(203).send("Hall Ticket Not Found");
      }
      // check if form is approved or not
      const isVerified = verifyCheck(formData);

      if (!isVerified) {
        return res
          .status(203)
          .send(`Your form status : ${formData.Form_Status}`);
      }

      const filter = { Sem: formData.Sem, Department: formData.Department };

      let subjects = await getSubjects(filter);

      // filter to get only elective subjects
      subjects = subjects.filter(
        (subject) =>
          !subject.Elective || subject.Subject_shortname === formData.Elective
      );

      formData.dataValues.subjects = subjects;
      //   return res.status(200).send(formData);
      //creating pdf for hall-ticket
      pdf
        .create(pdfTemplate(formData), {})
        .toFile("hallticket.pdf", (err, resp) => {
          if (err) {
            return res.status(200).send({ err });
          }
          return res.status(200).sendFile(resp.filename);
        });
    } catch (error) {
      res.status(404).send({ error: { Message: "SERVER ERROR" } });
      console.log(error);
    }
  },
};

