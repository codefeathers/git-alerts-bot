const github = function (body) {

	if (body.commits && body.ref.match("^/refs/heads/")) return "commit";
	if (body.commits && body.ref.match("^/refs/tags/")) return "tag";
	if (body.issue) return "issue";

};

module.exports = {github};
