const ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
	'use strict';

	function plus(a, b) { return a + b; }

	return array.reduce(plus) / array.length;
}

function calculateAverageAgeByCentury(ancestry) {
	'use strict';

	let result = {};

	for(let i = 0; i < ancestry.length; i++) {
		let currentPerson = ancestry[i];
		let currentCentury = getCentury(currentPerson['died']);
		let currentAge = currentPerson['died'] - currentPerson['born'];

		if(result[currentCentury]) {
			result[currentCentury].push(currentAge);
		} else {
			result[currentCentury] = [currentAge];
		}
	};

	for(let century in result) {
		result[century] = average(result[century]);
		console.log(century + ':' + result[century]);
	}

	return result;
}

function getCentury(year) {
	return Math.ceil(year / 100);
}

calculateAverageAgeByCentury(ancestry);
