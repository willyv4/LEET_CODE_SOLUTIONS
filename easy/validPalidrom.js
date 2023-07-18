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

const isPalindrome = function (s) {
  const string = s.toLowerCase().split("");
  const res = string.filter((itm) => /^[a-z]$/.test(itm) || /^\d$/.test(itm));
  const original = res.join("");
  const copy = res.reverse().join("");

  return original === copy ? true : false;
};

const res = isPalindrome("0P");
// const res2 = isPalindrome("a");
console.log(res);
// console.log(res2);
