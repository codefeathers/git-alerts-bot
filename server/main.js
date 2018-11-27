module.exports = app => {
	
	app.get("/webhook/:provider", (req, res) => {

		const { provider } = req.params;
		const eventType = req.strategies[provider].getEvent(req.body);

	});

};
