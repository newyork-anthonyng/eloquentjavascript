function range(start, end, step) {
	'use strict';

	if(!step) {
		step = end - start > 0 ? 1 : -1;
	}

	let result = [];

	if(start < end) {
		for(let i = start; i <= end; i += step) {
			result.push(i);
		}
	} else {
		for(let i = start; i >= end; i += step) {
			result.push(i);
		}
	}

	return result;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

function sum(arrayOfNumbers) {
	'use strict';

	return arrayOfNumbers.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
	});
}

console.log(sum(range(1, 10)) === 55);
console.log(sum(range(5, 2, -1)) === 14);
