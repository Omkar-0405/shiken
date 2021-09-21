const db = require("../config");
const Subject = db.Subject;

module.exports = formController = {
    async addSubject(req, res) {

        const { Department, Sem, Subject_code, Subject_name, Subject_shortname, Year, Elective } = req.body;
        try {
            let subject = await Subject.findOne({ where: { Subject_code } });

            if (subject) {
                return res.status(203).send({ error: { Message: "Subject already Submitted" } })
            }
            subject = await Subject.create({ Department, Sem, Subject_code, Subject_name, Subject_shortname, Year, Elective });
            return res.status(200).send(subject);

        } catch (error) {
            res.status(404).send({ error: { Message: "SERVER ERROR" } });
            console.log(error)
        }
    },
    async getSubjects(query) {

        try {
            let subjects = await Subject.findAll({ where: query });
            // console.log(JSON.stringify(subjects))
            if (subjects.length === 0) {
                return { error: { Message: "Subjects Not Found" } }
            }
            return subjects;

        } catch (error) {
            console.log(error)
            return error;
        }
    }
}