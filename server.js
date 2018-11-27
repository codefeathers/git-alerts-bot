const express = require("express");
const main = require("./server/index");
const convert = require("./util/convert");
const { server: config } = require("./config");
const PORT = config.server.port;

const app = express();

app.use(express.json());
app.use((req, res, next) => {

	req.convert = convert;
	next();

});

main(app);

app.listen(PORT, () => console.log("Listening on port", PORT));
