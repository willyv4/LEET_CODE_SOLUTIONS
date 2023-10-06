// add whatever parameters you deem necessary
function twoArrayObject(ltrs, nums) {
	let obj = {};
	for (let i = 0; i < ltrs.length; i++) obj[ltrs[i]] = nums[i] || null;
	return obj;
}

module.exports = { twoArrayObject };
