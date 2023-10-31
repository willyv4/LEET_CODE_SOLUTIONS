// given an array of integers and a target
// return the indexes of the two values that match the target

// if not found return []

// const TwoSum = (arr, target) => {
//   // obj
//   // loop over arr
//   // const match = num[i] - target
//   // if match in obj return [i, obj[match]]
//   // obj[nums[i]] = i

//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     const match = target - arr[i];
//     if (match in obj) return [i, obj[match]];
//     obj[arr[i]] = i;
//   }

//   return [];
// };

// console.log(TwoSum([1, 2, 3, 4], 6)); // [1, 3]

/**
 * Given two strings s and t, return true
 * if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging
 * the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

// create function is anagram (s, t)

// is t an anagram of s
// does t have all the same letters as t

// so we need to check all the letters in s and see if they mach each letter count in t

// create a function that makes objs
// that have a count of each letter

// isAnagram function
// call makeObj on t
// call makeObj on s

// loop through obj keys of s
// check if objS[key] !== objT[key] return false

// return true

// const CountLetters = (string) => {
//   const obj = {};

//   for (let char of string) {
//     !obj[char] ? (obj[char] = 1) : (obj[char] += 1);
//   }

//   return obj;
// };

// const isAnagram = (s, t) => {
//   const objS = CountLetters(s);
//   const objT = CountLetters(t);

//   for (let key in objS) {
//     if (objS[key] !== objT[key]) return false;
//   }

//   return true;
// };

// console.log(isAnagram("nono", "no0on"));

// /**
//  *
//  * Given an array of strings strs, group the anagrams together.
//   You can return the answer in any order.An Anagram is a word
//   or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once. strings
//  */

// // create an obj

// // loop over each string in the arr of strings
// // create variable match which splits sorts and joins trh current string
// // if obj[match]
// // obj[match].puhs(string)
// // else obj[match] = Array(str)

// // return obj.values(obj)

// const groupAnagrams = (strings) => {
//   const obj = {};
//   for (let word of strings) {
//     const match = word.split("").sort().join("");
//     obj[match] ? obj[match].push(word) : (obj[match] = Array(word));
//   }
//   return Object.values(obj);
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// function removeCharactersBeforePoundSigns(input) {
//   let count = 0;
//   let arr = [];

//   for (let i = input.length - 1; i >= 0; i--) {
//     if (input[i] === "#") {
//       count++;
//     } else {
//       count > 0 ? (count -= 1) : arr.push(input[i]);
//     }
//   }

//   return arr.reverse().join("");
// }

// const str1 = "dpfef##kcd#ff#";
// const result = removeCharactersBeforePoundSigns(str1); // "dpfkcf";
// console.log(result);

// const gcdOfStrings = function (str1, str2) {
//   if (str1 + str2 !== str2 + str1) return "";
//   const lenGCD = gcd(str1.length, str2.length);
//   return str1.substring(0, lenGCD);
// };

// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// const canPlaceFlowers = function (flowerbed, n) {
//   const left = flowerbed[n - 1];
//   const center = flowerbed[n];
//   const right = flowerbed[n + 1];

//   if ((center === 0 && left === 1) || right === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

const reverseVowels = (string) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let left = 0;
  let right = string.length - 1;
  string = string.split("");

  while (left < right) {
    if (vowels.has(string[left]) && vowels.has(string[right])) {
      const temp = string[left];
      string[left] = string[right];
      string[right] = temp;

      left++;
      right--;
    } else if (!vowels.has(string[left])) {
      left++;
    } else if (!vowels.has(string[right])) {
      right--;
    }
  }

  return string.join("");
};

console.log(reverseVowels("leetcode"));
