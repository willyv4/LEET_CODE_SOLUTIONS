/**
 * long string without repeating chars
 *
 * lets make a set
 * lets make a an arr
 *
 * lets loop over each char in string
 *
 * add char to arr and set
 * check if arr and set size and length are not eqaul {
 * largest = math.max(largest, set.size)
 * make sure set and arr are renewed
 * }
 *
 *
 * return largest
 */

function lengthOfLongestSubstring(string) {
  if (new Set(string.split("")).size === string.length) return string.length;

  let arr = [];
  let set = new Set();
  let largest = 0;

  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
    set.add(string[i]);

    if (arr.length !== set.size) {
      arr = [];
      set = new Set();
      for (let j = i - 1; j >= 0; j--) {
        if (string[j] === string[i]) {
          i = j;
          break;
        }
      }
    }

    largest = Math.max(largest, set.size);
  }

  return largest;
}

// to study
function lengthOfLongestSubstring(string) {
  let set = new Set();
  let longest = 0;
  let start = 0;

  for (let end = 0; end < string.length; end++) {
    while (set.has(string[end])) {
      set.delete(string[start]);
      start++;
    }
    set.add(string[end]);
    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected output: 3
console.log(lengthOfLongestSubstring("abcde")); // Expected output: 5
console.log(lengthOfLongestSubstring("a")); // Expected output: 1
console.log(lengthOfLongestSubstring("aab")); // Expected output: 2
console.log(lengthOfLongestSubstring("dvdf")); // Expected output: 3
console.log(lengthOfLongestSubstring("anviaj")); // expected 5
