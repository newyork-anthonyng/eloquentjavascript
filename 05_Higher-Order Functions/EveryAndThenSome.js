function every(array, predicate) {
	'use strict';

	for(let i = 0; i < array.length; i++) {
		let currentElement = array[i];

		if(!predicate(currentElement)) return false;
	}

	return true;
}

console.log(every([NaN, NaN, NaN], isNaN) === true);
console.log(every([NaN, NaN, 4], isNaN) === false);

function some(array, predicate) {
	'use strict';

	for(let i = 0; i < array.length; i++) {
		let currentElement = array[i];

		if(predicate(currentElement)) return true;
	}

	return false;
}

console.log(some([NaN, 3, 4], isNaN) === true);
console.log(some([2, 3, 4], isNaN) === false);
