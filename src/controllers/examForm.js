const db = require("../config");
const ExamForm = db.ExamForm;
const Student = db.Student;

module.exports = formController = {
    async addForm(req, res) {

        const { Email, Roll_No, First_Name, Father_Name, Last_Name, Mother_Name, Mobile_No, Department, Year, Sem, Elective } = req.body;
        try {
            let form = await ExamForm.findOne({ where: { Roll_No } });

            if (form) {
                return res.status(203).send({ error: { Message: "Form already Submitted" } })
            }
            form = await ExamForm.create({ Email, Roll_No, First_Name, Father_Name, Last_Name, Mother_Name, Mobile_No, Department, Year, Sem, Elective });
            return res.status(200).send(form);

        } catch (error) {
            res.status(404).send({ error: { Message: "SERVER ERROR" } });
            console.log(error)
        }
    },
    // getting forms to get Verified and to genrate SeatNo.
    async getSubmittedForms(query) {

        try {
            let forms = await ExamForm.findAll({ where: query });

            if (forms.length === 0) {
                return { error: { Message: "Forms are not in record" } }
            }
            return forms;
        } catch (error) {
            console.log(error)
            return { error: { Message: "SERVER ERROR" } };
        }
    },
    async verifyForms(req, res) {
        const forms = req.body.forms;
        try {

            if (forms.length === 0) {
                return res.status(203).send({ error: { Message: "Forms not found in body" } })
            }
            let num = 0;
            forms.forEach(async form => {
                // seat No generation logic
                let seatNo = Number(req.body.seat_no_seq) * 100;
                if (form.Form_Status === "Approved") {
                    let Sem = form.Sem;
                    // seatNo = Sem.toString() + "0" + num.toString();
                    seatNo = seatNo + num;
                    num++;
                }
                let formDb = await ExamForm.update(
                    { Form_Status: form.Form_Status, Seat_No: seatNo },
                    { where: { Roll_No: form.Roll_No } }
                );

            })
            return res.status(200).send("Forms Verified Successfully")
        } catch (error) {
            console.log(error)
            return { error: { Message: "SERVER ERROR" } };
        }
    },
    async updateForm(req, res) {
        const { Email, Roll_No, First_Name, Father_Name, Last_Name, Mother_Name, Mobile_No, Department, Year, Sem } = req.body;
        try {
            let form = await ExamForm.findOne({ where: { Roll_No } });
            if (!form) {
                return { error: { Message: "Forms are not in record" } };
            }
            let updatedForm = await ExamForm.update({ Email, Roll_No, First_Name, Father_Name, Last_Name, Mother_Name, Mobile_No, Department, Year, Sem },
                { where: { Roll_No } });
            return res.status(200).json(updatedForm);
        } catch (error) {
            console.log(error)
            return { error: { Message: "SERVER ERROR" } };
        }
    }
}