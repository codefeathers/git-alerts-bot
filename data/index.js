module.exports = (Sequelize, config) => {

	const { database, username, password, options } = config.sequelize;
	const sequelize = new Sequelize(database, username, password, options);
	const models = require("../models")(sequelize);
	return sequelize.sync().then(() => models);

};
