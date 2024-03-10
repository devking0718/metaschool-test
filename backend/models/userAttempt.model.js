module.exports = (sequelize, Sequelize) => {
    const UserAttempt = sequelize.define("UserAttempt", {
        userId: {
            type: Sequelize.INTEGER
        },
        assessmentId: {
            type: Sequelize.INTEGER
        },
        score: {
            type: Sequelize.STRING
        },
    });

    return UserAttempt;
};
