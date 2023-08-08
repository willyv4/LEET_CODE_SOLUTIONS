/**
 * const romanToInt = (str: roman intergers) => {
 * }
 *
 * output should be one number
 *
 *  2 good examples:
 *
 * 	"III" => 3
 *
 *  "LVIII" => 58
 *
 *  "MCMXCIV" => 1994
 *
 *	"IV" => 4
 *
 *  "XC" => 90
 *
 * 	"CM" => 900
 *
 */

//  "IV" => 1994

// endValue = 0
// obj = {
// "I" : 1
//  "v" : 5
//  "X" : 10
//  "L" : 50
//  "C" : 100
//  "D" : 500
//  "M" : 1000
// }

// loop over str
// currVal obj[key]
// let pointer = index + 1

// if any these \/ {
// if curr val = I and pointerVal = V 4
// if curr val = I and pointer = X 9
// if curr val = X and pointer = L 40
// if curr val = X and pointer = C 90
// if curr val = C and pointer = D 400
// if curr val = C and pointer = M 900
// i++
// }

// M = 1000
// CM = 900
// XC = 90
// IV = 4

const romanToInt = (str) => {
	let endValue = 0;
	const romanObject = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	for (let i = 0; i < str.length; i++) {
		let currVal = str[i];
		let nextVal = str[i + 1];

		if (currVal === "I" && nextVal === "V") {
			endValue += 4;
			i++;
			continue;
		} else if (currVal === "I" && nextVal === "X") {
			endValue += 9;
			i++;
			continue;
		} else if (currVal === "X" && nextVal === "L") {
			endValue += 40;
			i++;
			continue;
		} else if (currVal === "X" && nextVal === "C") {
			endValue += 90;
			i++;
			continue;
		} else if (currVal === "C" && nextVal === "D") {
			endValue += 400;
			i++;
			continue;
		} else if (currVal === "C" && nextVal === "M") {
			endValue += 900;
			i++;
			continue;
		} else {
			endValue += romanObject[str[i]];
		}
	}

	return endValue;
};

console.log(romanToInt("LVIII"));

const romanToInt2 = (s) => {
	const roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;
	for (let i = 0; i < s.length; i++) {
		roman[s[i]] < roman[s[i + 1]]
			? (result = result - roman[s[i]])
			: (result = result + roman[s[i]]);
	}
	return result;
};
