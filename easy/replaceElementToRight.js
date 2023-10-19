const replaceElements = function (arr) {
	let result = [];
	let largest = arr[arr.length - 1];

	for (let i = arr.length - 1; i > 0; i--) {
		let currNum = arr[i];
		if (currNum > largest) largest = currNum;
		result[i - 1] = largest;
	}

	result.push(-1);
	return result;
};
