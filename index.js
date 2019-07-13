'use strict';

var has = require('has');
var trim = require('string.prototype.trim');

module.exports = function listify(list) {
	if (!Array.isArray(list)) {
		throw new TypeError('requires an array');
	}

	var options = arguments.length > 1 ? arguments[1] : null;
	if (!options) {
		options = {};
	}
	var separator = has(options, 'separator') ? options.separator : ', ';
	var finalWord = has(options, 'finalWord') ? options.finalWord : 'and';
	if (finalWord.length > 0) {
		finalWord += ' ';
	}

	var trimmed = list.filter(trim);
	var str;
	if (trimmed.length === 2 && finalWord.length > 0) {
		str = trimmed.join(' ' + finalWord);
	} else if (trimmed.length < 3) {
		str = trimmed.join(separator);
	} else {
		str = trimmed.slice(0, -1).concat(finalWord + trimmed[trimmed.length - 1]).join(separator);
	}
	return str;
};

