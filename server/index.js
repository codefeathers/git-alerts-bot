module.exports = app => {
	
	app.get("/webhook/:provider", (req, res) => {

		const strategy = req.params.provider;
		const eventType = req.convert.getEvent[strategy](req.body);

	});

};
