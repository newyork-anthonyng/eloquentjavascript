const ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
	'use strict';

	function plus(a, b) { return a + b; }

	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

function calculateAverageMotherChildAgeDifference(ancestry) {
	'use strict';
	let age = [];

	for(let child in ancestry) {
		let currentMother = ancestry[child]['mother'];

		if(ancestry.hasOwnProperty(currentMother)) {
			let childBirthYear = ancestry[child]['born'];
			let motherBirthYear = ancestry[currentMother]['born'];
			let mothersAge = childBirthYear - motherBirthYear;

			age.push(mothersAge);
		}
	}

	return average(age);
}

console.log(calculateAverageMotherChildAgeDifference(byName));
