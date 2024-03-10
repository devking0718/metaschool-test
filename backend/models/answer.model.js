module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        text: {
            type: Sequelize.STRING
        },
        isCorrect: {
            type: Sequelize.BOOLEAN
        },
        questionId: {
            type: Sequelize.INTEGER
        },
    });

    return Answer;
};
