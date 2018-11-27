module.exports = {
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"env": {
		"node": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"indent": [ "error", "tab" ],
		"operator-linebreak": [ "error", "before" ],
		"semi": [ "error", "always" ],
		"comma-dangle": [ "error", "only-multiline" ],
		"quotes": [ "error", "double" ],
		"no-tabs": [ "error", { "allowIndentationTabs": true } ],
		"padded-blocks": 2,
		"space-before-blocks": 2,
		"comma-style": 2,
		"no-console": 0,
		"valid-typeof": 0,
		"arrow-parens": 0,
		"generator-star-spacing": 0,
		"space-before-function-paren": 0,
		"object-property-newline": 0,
		"new-cap": 0,
		"no-eval": 0
	}
};
