module.exports = sequelize => ({
	integrations: require("./integrations")(sequelize),
});
