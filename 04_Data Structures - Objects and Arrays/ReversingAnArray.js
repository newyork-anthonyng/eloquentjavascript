function reverseArray(array) {
	'use strict';

	let result = [];

	for(let i = array.length - 1; i >= 0; i--) {
		result.push(array[i]);
	}

	return result;
}

console.log(reverseArray(['A', 'B', 'C']));

function reverseArrayInPlace(array) {
	'use strict';

	for(let i = 0; i < Math.floor(array.length / 2); i++) {
		let oppositeIndex = array.length - 1 - i;
		let temp = array[oppositeIndex];

		array[oppositeIndex] = array[i];
		array[i] = temp;
	}
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
var arrayValue1 = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue1);
console.log(arrayValue1);
