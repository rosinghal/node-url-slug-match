'use strict';

function slug (text) {
	return text.toString().toLowerCase()
		.replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
		.replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
		.replace(/^-+|-+$/g, ''); // remove leading, trailing -
};

module.exports = function () {
	var text = arguments[0];
	return slug(text);
};
