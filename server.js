const express = require("express");
const app = express();
app.use(express.json());
const convert = require("./util/convert");

app.get("/webhook/:provider", (req) => {

	const strategy = req.params.provider;
	const eventType = convert.getEvent[strategy](req.body);

});
app.listen(2000, () => console.log("Listening on port 2000"));
