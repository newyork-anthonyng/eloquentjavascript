function min(a, b) {
	'use strict';

	return a < b ? a : b;
}

console.log(min(0, 10) === 0);
console.log(min(0, -10) === -10);
