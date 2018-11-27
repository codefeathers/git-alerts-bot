const express = require("express");
const main = require("./server/main");
const strategies = require("./strategies");
const { server: config } = require("./config");
const PORT = config.server.port;

const app = express();

app.use(express.json());
app.use((req, res, next) => {

	// Add our strategies object to request
	req.strategies = strategies;
	next();

});

main(app);

app.listen(PORT, () => console.log("Listening on port", PORT));
