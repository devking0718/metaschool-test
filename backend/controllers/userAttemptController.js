const db = require("../models");
const Attempt = db.userAttempt;

module.exports = {
    async createAttempt(req, res) {
        try {
            const { assessmentId, userId } = req.body;

            const newAttempt = {
                userId: userId,
                assessmentId: assessmentId,
                socre: "0"
            };

            await Attempt.create(newAttempt);

            res.status(200).json({ message: 'Attempt Started!' });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },

    async getAllAttempt(req, res) {
        try {
            async function getUserEmail(userId) {
                try {
                    const user = await db.user.findByPk(userId);
                    return user ? user.email : '';
                } catch (error) {
                    console.error('Error fetching user email:', error);
                    return '';
                }
            }

            const userAttempts = await db.userAttempt.findAll({
                include: [{
                    model: db.assessment,
                    as: 'assessment',
                }]
            });

            const userAttemptsMap = {};

            // Group user attempts by user ID
            userAttempts.forEach(attempt => {
                if (!userAttemptsMap[attempt.userId]) {
                    userAttemptsMap[attempt.userId] = {};
                }
                if (!userAttemptsMap[attempt.userId][attempt.assessmentId]) {
                    userAttemptsMap[attempt.userId][attempt.assessmentId] = {
                        assessmentTitle: attempt.assessment ? attempt.assessment.title : "Unknown",
                        numAttempts: 0,
                        attempts: []
                    };
                }

                userAttemptsMap[attempt.userId][attempt.assessmentId].attempts.push({
                    assessmentId: attempt.assessmentId,
                    assessmentTitle: attempt.assessment ? attempt.assessment.title : "Unknown",
                    numAttempts: 1, // Set to 1 for each individual attempt
                });

                userAttemptsMap[attempt.userId][attempt.assessmentId].numAttempts++;
            });

            // Construct the desired result array
            const result = [];
            for (const userId in userAttemptsMap) {
                const userEmail = await getUserEmail(userId);
                const userAttemptsPerAssessment = userAttemptsMap[userId];
                result.push({
                    no: result.length + 1,
                    userEmail: userEmail,
                    attempts: Object.values(userAttemptsPerAssessment).map(assessment => ({
                        assessmentId: assessment.assessmentId,
                        assessmentTitle: assessment.assessmentTitle,
                        numAttempts: assessment.numAttempts,
                    }))
                });
            }

            res.status(200).json({ message: 'All attempt list', data: result });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}