const db = require("../models");
const Section = db.section;
const Question = db.question;
const Answer = db.answer;

module.exports = {
    async createSection(req, res) {
        try {
            const { title, assessmentId } = req.body;

            if (title === "") {
                return res.status(500).json({ message: `Please input Section informations`, status: 'Please input Section informations' });
            }

            const newSection = {
                title: title,
                assessmentId: assessmentId
            };

            await Section.create(newSection);

            res.status(200).json({ message: 'Section Created!' });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
    async getAllSection(req, res) {
        try {
            const {id} = req.params;
            const sections = await Section.findAll({
                where: {
                    assessmentId: id
                },
                include: {
                    model: Question,
                    as: 'questions',
                    include: {
                        model: Answer,
                        as: 'answers',
                    }
                }
            });

            res.status(200).json({ message: 'All sections list', data: sections });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}