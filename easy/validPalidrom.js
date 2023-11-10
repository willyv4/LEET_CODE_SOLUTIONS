/* Intuition

what is the problem 
check for palidrom

first thoughts

define words
remove spaces and remove items that are not letters
ensure all things are lowercase
according to rules empty string is a palidrom

do all necessary things ^^^

compare the string to a reverse copy

raceacar 
racaecar



possible refactors 
check if left = right and count inwards 
igore items that aren't numbers or letters


*/

// const isPalindrome = function (s) {
//   const string = s.toLowerCase().split("");
//   const res = string.filter((itm) => /^[a-z]$/.test(itm) || /^\d$/.test(itm));
//   const original = res.join("");
//   const copy = res.reverse().join("");

//   return original === copy ? true : false;
// };

// const res = isPalindrome("0P");
// // const res2 = isPalindrome("a");
// console.log(res);
// // console.log(res2);

// function isPalindrome(string) {
//   const set = new Set([
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ]);
//   const copy = string.toLowerCase().split("");

//   let reversed = [];
//   let original = [];

//   for (let i = copy.length - 1; i >= 0; i--) {
//     if (set.has(copy[i])) reversed.push(copy[i]);
//   }

//   for (let char of copy) {
//     if (set.has(char)) original.push(char);
//   }

//   return reversed.join("") === original.join("");
// }

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
};

const isPalindrome = (s) => {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

// const isPalindrome = (s) => {
//   if (s == null) return false;
//   s = s.toLowerCase();
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     while (left < right && !isAlphaNumeric(s[left])) left++;
//     while (left < right && !isAlphaNumeric(s[right])) right--;
//     if (s[left] !== s[right]) return false;

//     left++;
//     right--;
//   }

//   return true;
// };

console.log(isPalindrome("a."));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
