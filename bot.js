const Telegraf = require("telegraf");
const config = require("./config");
const Sequelize = require("sequelize");

const bot = new Telegraf(config.botApiKey);
