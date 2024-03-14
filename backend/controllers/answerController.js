const db = require("../models");
const Answer = db.answer;
const Question = db.question;


module.exports = {
    async createAnswer(req, res) {
        try {
            const { text, questionId, isCorrect } = req.body;

            if (text === "") {
                return res.status(500).json({ message: `Please input Answer informations`, status: 'Please input Answer informations' });
            }

            const question = await Question.findOne(
                {
                    where: {
                        id: questionId
                    }
                }
            );

            if (!question) {
                return res.status(500).json({ message: `Invalid Question ID`, status: 'Server Error' });
            }


            if (question.type === "MSQ" && isCorrect == true) {
                const tAnswer = await Answer.findOne(
                    {
                        where: {
                            questionId: questionId,
                            isCorrect: true
                        }
                    }
                );
                if (tAnswer) {
                    return res.status(500).json({ message: `Already have one Correct Answer.`, status: 'Server Error' });
                }
            }

            const newAnswer = {
                text: text,
                questionId: questionId,
                isCorrect: isCorrect
            };

            await Answer.create(newAnswer);

            res.status(200).json({ message: 'Answer Created!' });
        } catch (error) {
            console.log("------------", error)
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}