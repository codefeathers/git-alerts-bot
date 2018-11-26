const Sequelize = require("sequelize");
const config = require("../config");

const { database, username, password, options } = config.sequelize;
const sequelize = new Sequelize(database, username, password, options);
const models = require("../models")(sequelize);

module.exports = sequelize.sync().then(() => models);
