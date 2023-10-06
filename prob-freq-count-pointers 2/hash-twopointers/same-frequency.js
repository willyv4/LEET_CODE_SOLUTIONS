// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	const n1 = makeHash(num1.toString());
	const n2 = makeHash(num2.toString());
	for (let key in n1) if (n1[key] !== n2[key]) return false;
	return true;
}

function makeHash(nums) {
	let obj = {};
	for (let num of nums) obj[num] = (obj[num] || 0) + 1;
	return obj;
}

console.log(sameFrequency(22, 222));

module.exports = { sameFrequency };
