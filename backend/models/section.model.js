module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
        title: {
            type: Sequelize.STRING
        },
        assessmentId: {
            type: Sequelize.INTEGER
        },
    });

    return Section;
};
