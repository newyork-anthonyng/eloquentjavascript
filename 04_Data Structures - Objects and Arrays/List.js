function arrayToList(array) {
	'use strict';

	let list = null;

	for(let i = array.length - 1; i >= 0; i--) {
		let currentList = {};
		currentList['value'] = array[i];
		currentList['rest'] = list;
		list = currentList;
	}

	return list;
}

//console.log(arrayToList([10, 20]));

function listToArray(list) {
	'use strict';

	let myArray = [];

	if(!list) return myArray;
	if(!list.hasOwnProperty('value') || !list.hasOwnProperty('rest')) {
		throw new Error('Expecting a List object ({value: x, rest: x})');
	}

	do {
		myArray.push(list.value);
		list = list.rest;
	} while(list);

	return myArray;
}

//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, list) {
	'use strict';

	return {
		value: element,
		rest: list
	};
}

//console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
	'use strict';

	for(let i = 0; i < number; i++) {
		if(list.value === number) return i;
		list = list.rest;
	}

	return undefined;
}

//console.log(nth(arrayToList([10, 20, 30]), 20));
//console.log(nth(arrayToList([10, 20, 30]), 10));
