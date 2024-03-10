const db = require("../models");
const Answer = db.answer;

module.exports = {
    async createAnswer(req, res) {
        try {
            const { text, questionId, isCorrect } = req.body;

            if (text === "") {
                return res.status(500).json({ message: `Please input Answer informations`, status: 'Please input Answer informations' });
            }

            const newAnswer = {
                text: text,
                questionId: questionId,
                isCorrect: isCorrect
            };

            await Answer.create(newAnswer);

            res.status(200).json({ message: 'Answer Created!' });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}