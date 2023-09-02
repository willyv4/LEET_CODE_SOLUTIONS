/** Group anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 *
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 *
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 *
 *
 *
 *
 * inputs is an array of strings
 * outputs is an array of arrays representing the anagrams
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Input: strs = ["", "", ""]
 * Output: [["", "", ""]]
 * 
 * input: ["a"]
 * output: [["a"]]
 * 
 * empty string are annagrams 
 * single letters are anagrams
 * annagrams are words with the exact same letters in them
 * 
 * if the words are not the same length they are not an annagram
 * 
 * create an object of each string
 * 
 * obj: {
 * o: "eat"
 * 1: "tea"
 * 2: "tan"
 * 3: "ate"
 * 4: "nat"
 * 5: "bat"
 * }
 * 
 * loop through the arr
 * 
 * sort each string 
 * 
//  * ["aet","aet","ant","aet","ant","abt"]   [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * create object 
 * 
 obj: {
 "aet": ["aet", "aet", "aet"]
 "ant": ["ant", "ant"]
 "abt": ["abt"]
 }
 * if string is not in object arr
 * push string into object 
 * else push string onto object arr
 * 
 * loop through keys in object 
 * and push each value into an arr
 */

const groupAnagrams = (strs) => {
	let result = [];
	let obj = {};

	for (let i = 0; i < strs.length; i++) {
		const match = strs[i].split("").sort().join("");
		!obj[match] ? (obj[match] = Array(strs[i])) : obj[match].push(strs[i]);
	}

	for (let key in obj) result.push(obj[key]);

	return result;
};

// const makeObjects = (str) => {
// 	let obj = {};

// 	for (let ltr of str) obj[ltr] = obj[ltr] + 1 || 1;

// 	return obj;
// };
// const isAnagram = (word, letters) => {
// 	if (word.length !== letters.length) return false;

// 	const wordObj = makeObjects(word);
// 	const ltrsObj = makeObjects(letters);

// 	for (let key in wordObj) if (wordObj[key] !== ltrsObj[key]) return false;

// 	return true;
// };
// const groupAnagrams = (strs) => {
//     const anagrams = {}

//     for (let str of strs){
//         let hasAnagram = false
//         for (let key in anagrams){
//             if (isAnagram(key, str)){
//                 anagrams[key].push(str)
//                 hasAnagram = true
//             }
//         }
//         if (!hasAnagram){
//             anagrams[str] = [str]
//         }
//     }
//     const arr = []
// for (let key in anagrams){
// arr.push(anagrams[key])
// }
// return arr

// }
