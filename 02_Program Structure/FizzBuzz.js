function FizzBuzz(start, end) {
	'use strict';

	for(let i = start; i <= end; i++) {
		if(i % 15 === 0) {
			console.log('FizzBuzz');
		} else if(i % 5 === 0) {
			console.log('Buzz');
		} else if(i % 3 === 0) {
			console.log('Fizz');
		} else {
			console.log(i);
		}
	}
}

FizzBuzz(1, 100);

// Alternative FizzBuzz
/*
function FizzBuzz1(start, end) {
	'use strict';

	let msg = '';

	for(let i = start; i <= end; i++, msg='') {
		if(!(i % 3)) msg += 'Fizz';
		if(!(i % 5)) msg += 'Buzz';

		console.log(msg || i);
	}
}
*/
