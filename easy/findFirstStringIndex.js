/*
Problem solving steps


1. Understand the question
   a. Are there any edge cases?
   b break down the question:
   what is it asking? 
   what are the rules? 

2. Do an example as a human
   a. Make sure the example is large enough
   b. Try to do the fail case too
   Tips:
   - Try it the "dumbest" way first
   - Try it a few different ways!
   - Compare the pros/cons of each method.
   - Compare speed/time complexity. Can you do it faster?

3. Write down the pseudo code (aka instructions)
   a. Test the pseudo code on an example (or a few)

4. Translate that into real code.
*/

/**
 * Understand:
 *
 * 1. check to see if the needle is in the haystack
 * @example Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * if its empty return -1
 *
 * 2 human example:
 * willgofor
 * will
 *
 */

// spread out the word
// w i l l g o f o r
// spread out the needle
// w i l l

// check if that word is found within the other by comparing index value to needle index values
const strStr = function (haystack, needle) {
  const needleLength = needle.length;
  let count = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[count]) {
      count++;
      if (count === needleLength && haystack[i] === needle[count - 1]) {
        return i - needleLength + 1;
      }
    }
  }

  return -1;
};

console.log(strStr("mississipi", "issip"));

module.exports = strStr;
