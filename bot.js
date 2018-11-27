const Telegraf = require("telegraf");
const Sequelize = require("sequelize");

const main = require("./bot/index");
const { bot: config } = require("./config");
const db = require("./data")(Sequelize, config);
const bot = new Telegraf(config.botApiKey);

Promise.all([ bot, db, config ]).then(main);
