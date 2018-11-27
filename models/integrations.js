const Sequelize = require("sequelize");
module.exports = sequelize =>
	sequelize.define("integrations", {
		chatID: { type: Sequelize.INTEGER, allowNull: false, unique: "com"},
		repoURL: {type: Sequelize.STRING, allowNull: false, unique: "com"},
		chatType: {type: Sequelize.STRING},
		issues: {type: Sequelize.BOOLEAN, defaultValue: false},
		pullRequests: {type: Sequelize.BOOLEAN, defaultValue: false},
		commits: {type: Sequelize.BOOLEAN, defaultValue: true},
	});
