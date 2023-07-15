/*
You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"

Example2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"


Example3: 
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"


edgecases
no strings in either
one string longer than the other

*/

const mergeAlternately = (w1, w2) => {
  let arr = [];

  let long = w1.length > w2.length ? w1 : w2;

  for (let i = 0; i <= long.length - 1; i++) {
    if (w1[i]) arr.push(w1[i]);
    if (w2[i]) arr.push(w2[i]);
  }

  return arr.join("");
};

module.exports = mergeAlternately;
