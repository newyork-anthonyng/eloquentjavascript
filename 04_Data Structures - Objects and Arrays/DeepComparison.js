function deepEqual(obj1, obj2) {
	'use strict';

	const type1 = typeof obj1;
	const type2 = typeof obj2;

	const areSameType = type1 === type2;
	if(!areSameType) return false;

	const areValidObjects = type1 === 'object' && type2 === 'object' &&
													obj1 !== null && obj2 !== null;

	if(areValidObjects) {
		const keys1 = Object.keys(obj1);
		const keys2 = Object.keys(obj2);

		if(!arraysAreEqual(keys1, keys2)) return false;

		for(let i = 0; i < keys1.length; i++) {
			return deepEqual(obj1[keys1[i]], obj2[keys2[i]]);
		}
	} else {
		return obj1 === obj2;
	}
}

function arraysAreEqual(array1, array2) {
	'use strict';

	if(array1.length !== array2.length) return false;

	for(let i = 0; i < array1.length; i++) {
		if(array1.indexOf(array2[i]) === -1) return false;
	}

	return true;
}

console.log(deepEqual({a: 1}, {a: 1}) === true);
console.log(deepEqual({a: 1, b: 2 }, {a: 1, b: 2 }) === true);
console.log(deepEqual({a: 2}, {a: 3}) === false);
console.log(deepEqual({a: 1, b: 2 }, {a: 1, c: 4, d: 6 }) === false);
console.log(deepEqual({a: 1, b: 2 }, {a: 1, c: 4 }) === false);
var obj = { here: { is: 'an'}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}) === false);
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}) === true);
