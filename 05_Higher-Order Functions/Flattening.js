function flatten(array) {
	'use strict';

	if(!Array.isArray(array)) throw new Error('Expected Array.');

	return array.reduce(function(previous, current) {
		return previous.concat(current);
	});
}

var arrays = [[1,2,3], [4,5],[6]];
console.log(flatten(arrays));
