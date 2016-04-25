'use strict';

function slug (text) {

	return text.toString().toLowerCase()
		.replace(/[^\w\s-]/g, '-') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters // .replace(/[^\w\s-\/]/g, '-') to preserve / also
		.replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
		.replace(/^-+|-+$/g, ''); // remove leading, trailing -
};

module.exports = function () {
	var text = [].map.call(arguments, function (str) {
		return str.trim();
	}).filter(function (str) {
		return str.length;
	}).join('-');

	return slug(text);
};
