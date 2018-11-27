module.exports = {

	event (data) {

		if (data.commits && data.ref.match("^/refs/heads/")) return "commit";
		if (data.commits && data.ref.match("^/refs/tags/")) return "tag";
		if (data.issue) return "issue";
	
	},

	commit (data) {

		const noun = "commit" + data.commits.length > 1 ? "s" : "";
		var text = data.commits.reduce((acc, curr, index) => {
	
			if (index < 6) {
	
				acc += `<a href='${curr.url}'>${curr.id.slice(0,6)}: `
					+ `${curr.message}</a>\n`;
	
			}
			return acc;
		
		}, `🔨 ${data.commits.length} ${noun}\n`);
		if (data.commits.length > 6) {
	
			text += `${data.commits.length - 6} more ${noun}.`;
		
		}

		return text;
	
	},

};
