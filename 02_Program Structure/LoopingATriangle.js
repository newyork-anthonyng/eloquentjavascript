function loopingATriangle(character, length) {
	'use strict';

	if(typeof length != 'number') throw new Error('Expected length to be a number.');
	if(length < 0) throw new Error('Expected length to be a positive number.');

	let string = character;

	for(let i = 1; i <= length; i++) {
		console.log(string);
		string += character;
	}
}

loopingATriangle('#', 7);
console.log('------');
loopingATriangle('#', 0);
console.log('------');
loopingATriangle('A', 10);
