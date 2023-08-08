const majorityElement = (arr) => {
	let object = {};
	let result = 0;
	let answer;

	for (let num of arr) !object[num] ? (object[num] = 1) : (object[num] += 1);

	for (let key in object) {
		if (object[key] > result) {
			result = object[key];
			answer = parseInt(key);
		}
	}

	return answer;
};

majorityElement([3, 2, 3]);
