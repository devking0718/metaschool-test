const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.assessment = require("./assessment.model.js")(sequelize, Sequelize);
db.section = require('./section.model.js')(sequelize, Sequelize);
db.question = require('./question.model.js')(sequelize, Sequelize);
db.answer = require('./answer.model.js')(sequelize, Sequelize);
db.userAttempt = require('./userAttempt.model.js')(sequelize, Sequelize);

db.assessment.hasMany(db.section);
db.section.belongsTo(db.assessment);

db.section.hasMany(db.question);
db.question.belongsTo(db.section);

db.question.hasMany(db.answer);
db.answer.belongsTo(db.question);

db.userAttempt.hasMany(db.assessment);

db.userAttempt.belongsTo(db.user);
db.userAttempt.belongsTo(db.assessment, { foreignKey: 'assessmentId' });
db.assessment.hasMany(db.userAttempt, { foreignKey: 'assessmentId' });

module.exports = db;
