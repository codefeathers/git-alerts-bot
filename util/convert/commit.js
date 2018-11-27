const github = function (data) {

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

};

const gitlab = github;

module.exports = { github, gitlab };
