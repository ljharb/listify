/*jslint node: true */
'use strict';

var listify = function listify(list) {
	if (!Array.isArray(list)) {
		throw new TypeError('requires an array');
	}

	var options = arguments.length > 1 ? arguments[1] : null;
	if (!options) {
		options = {};
	}
	var separator = options.hasOwnProperty('separator') ? options.separator : ', ';
	var finalWord = options.hasOwnProperty('finalWord') ? options.finalWord : 'and';
	if (finalWord.length > 0) {
		finalWord = ' ' + finalWord + ' ';
	}

	var trimmed = list.filter(function (item) { return String(item).trim(); });
	var str;
	if (trimmed.length === 2 && finalWord.length > 0) {
		str = trimmed.join(finalWord);
	} else if (trimmed.length < 3) {
		str = trimmed.join(separator);
	} else {
		str = trimmed.slice(0, -1).join(separator) + finalWord + trimmed[trimmed.length - 1];
	}
	return str;
};

module.exports = listify;

