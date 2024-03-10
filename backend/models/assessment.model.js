module.exports = (sequelize, Sequelize) => {
    const Assessment = sequelize.define("assessment", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    });

    return Assessment;
};
