function buildChessBoard(size) {
	'use strict';

	if(typeof size !== 'number') throw new Error('Expected size to be a number.');
	if(size < 2) throw new Error('Expected board size to be greater than 1x1.');

	let board = '';

	for(let i = 0; i < size; i++) {
		let row = '';

		for(let j = 0; j < size; j++) {
			let shouldDrawSquare = (i + j) % 2 !== 0;

			if(shouldDrawSquare) {
				row += '#';
			} else {
				row += ' ';
			}
		}

		row += '\n';
		board += row;
	}

	console.log(board);
}

buildChessBoard(8);

// Clever answer
/*
function buildChessBoard1() {
	'use strict';

	let board = '';
	let evenRow = '# # # # ';
	let oddRow = ' # # # #';

	for(let i = 0; i < 8; i++) {
		if(i % 2 === 0) {
			board += evenRow + '\n';
		} else {
			board += oddRow + '\n';
		}
	}

	console.log(board);
}

buildChessBoard1();
*/
