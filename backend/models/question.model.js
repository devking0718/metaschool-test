module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        text: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.ENUM('MCQ', 'MSQ')
        },
        sectionId: {
            type: Sequelize.INTEGER
        },
    });

    return Question;
};
