const db = require("../models");
const Question = db.question;

module.exports = {
    async createQuestion(req, res) {
        try {
            const { text, sectionId, type } = req.body;

            if (text === "") {
                return res.status(500).json({ message: `Please input Question informations`, status: 'Please input Question informations' });
            }

            const newQuestion = {
                text: text,
                sectionId: sectionId,
                type: type
            };

            await Question.create(newQuestion);

            res.status(200).json({ message: 'Question Created!' });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}