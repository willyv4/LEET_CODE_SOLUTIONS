// const canConstruct = (ransomNote, magazine) => {
// 	const rObj = makeObj(ransomNote);
// 	const mObj = makeObj(magazine);
// 	for (let key in rObj) if (mObj[key] < rObj[key] || !mObj[key]) return false;
// 	return true;
// };

// function makeObj(str) {
// 	let obj = {};
// 	for (let i of str) obj[i] = (obj[i] || 0) + 1;
// 	return obj;
// }
const canConstruct = (ransomNote, magazine) => {
	let mObj = {};
	for (let ltr of magazine) mObj[ltr] = (mObj[ltr] || 0) + 1;
	for (let ltr of ransomNote) {
		if (!mObj[ltr]) return false;
		mObj[ltr]--;
	}
	return true;
};

console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("a", "b")); // false
