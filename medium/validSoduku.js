// bad time complexity
// beats 50% and 70%
const isValidSudoku = function (board) {
	// loop over cols and rows and check dups
	for (let i = 0; i < board.length; i++) {
		let setCol = new Set();
		let setRow = new Set();

		for (let j = 0; j < board[0].length; j++) {
			const colElement = board[j][i];
			const rowElement = board[i][j];

			if (!isNaN(colElement)) {
				if (setCol.has(colElement)) return false;
				setCol.add(colElement);
			}

			if (!isNaN(rowElement)) {
				if (setRow.has(rowElement)) return false;
				setRow.add(rowElement);
			}
		}
	}

	// loop over sections 3x3 check for dups
	for (let sectionRow = 0; sectionRow < board.length; sectionRow += 3) {
		for (let sectionCol = 0; sectionCol < board[0].length; sectionCol += 3) {
			let set = new Set();

			for (let row = sectionRow; row < sectionRow + 3; row++) {
				for (let col = sectionCol; col < sectionCol + 3; col++) {
					const element = board[row][col];

					if (!isNaN(element)) {
						if (set.has(element)) return false;
						set.add(element);
					}
				}
			}
		}
	}

	return true;
};

// really good time complexity same idea but much more intuitive
// var isValidSudoku2 = function (board) {
// 	for (let i = 0; i < 9; i++) {
// 		let row = new Set(),
// 			col = new Set(),
// 			box = new Set();

// 		for (let j = 0; j < 9; j++) {
// 			let _row = board[i][j];
// 			let _col = board[j][i];
// 			let _box =
// 				board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

// 			if (_row != ".") {
// 				if (row.has(_row)) return false;
// 				row.add(_row);
// 			}
// 			if (_col != ".") {
// 				if (col.has(_col)) return false;
// 				col.add(_col);
// 			}

// 			if (_box != ".") {
// 				if (box.has(_box)) return false;
// 				box.add(_box);
// 			}
// 		}
// 	}
// 	return true;
// };

const boardOne = [
	["7", ".", ".", ".", "4", ".", ".", ".", "."],
	[".", ".", ".", "8", "6", "5", ".", ".", "."],
	[".", "1", ".", "2", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "9", ".", ".", "."],
	[".", ".", ".", ".", "5", ".", "5", ".", "."],
	[".", ".", ".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "2", ".", "."],
	[".", ".", ".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku2(boardOne));
