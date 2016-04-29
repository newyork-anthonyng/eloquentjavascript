function countBs(string) {
	'use strict';

	let count = 0;

	for(let i = 0; i < string.length; i++) {
		let currentChar = string[i];
		if(currentChar === 'B') count++;
	}

	return count;
}

function countChar(string, match) {
	'use strict';

	let count = 0;

	for(let i = 0; i < string.length; i++) {
		let currentChar = string[i];
		if(currentChar === match) count++;
	}

	return count;
}

console.log(countBs('BBC') === 2);
console.log(countBs('BBBBB') === 5);
console.log(countBs('1234b') === 0);

console.log(countChar('kakkerlak', 'k') === 4);
console.log(countChar('BBC', 'B') === 2);
console.log(countChar('BBC', 'C') === 1);
