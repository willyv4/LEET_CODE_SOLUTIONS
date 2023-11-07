/**
 
You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].

A message is list of words that are separated by a single space with no leading or trailing spaces. The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.

Return the sender with the largest word count. If there is more than one sender with the largest word count, return the one with the lexicographically largest name.

Note:

Uppercase letters come before lowercase letters in lexicographical order.
"Alice" and "alice" are distinct.
 

Example 1:

Input: messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]
Output: "Alice"
Explanation: Alice sends a total of 2 + 3 = 5 words.
userTwo sends a total of 2 words.
userThree sends a total of 3 words.
Since Alice has the largest word count, we return "Alice".
Example 2:

Input: messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]
Output: "Charlie"
Explanation: Bob sends a total of 5 words.
Charlie sends a total of 5 words.
Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.
 
 
*/

const largestWordCount = (messages, senders) => {
  const obj = {};
  const result = { name: "", max: 0 };

  for (let i = 0; i < messages.length; i++) {
    obj[senders[i]]
      ? (obj[senders[i]] += messages[i].split(" ").length)
      : (obj[senders[i]] = messages[i].split(" ").length);
  }

  for (let key in obj) {
    if (obj[key] > result.max) {
      result.name = key;
      result.max = Math.max(obj[key], result.max);
    } else if (obj[key] === result.max) {
      result.name = determineLargerName(key, result.name);
      result.max = Math.max(obj[key], result.max);
    }
  }

  return result.name;
};

function determineLargerName(str1, str2) {
  const alphabet = {};

  let counter = 0;
  for (let letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    alphabet[letter] = counter;
    counter++;
  }

  let counter2 = 26;
  for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    alphabet[letter] = counter2;
    counter2++;
  }

  const count = Math.max(str1.length, str2.length);

  for (let i = 0; i < count; i++) {
    if (alphabet[str1[i]] === alphabet[str2[i]]) {
      continue;
    } else if (alphabet[str1[i]] > alphabet[str2[i]]) {
      if (!str1[i]) return str2;
      return str1;
    } else {
      if (!str2[i]) return str1;
      return str2;
    }
  }
}

// better solution var largestWordCount = function(messages, senders) {
// let wordCount = {}
// let result = ''
// let maxCount = -Infinity
// for (let i = 0; i < messages.length;i++) {
//     let count=messages[i].split(' ').length
//     wordCount[senders[i]] = wordCount[senders[i]] == undefined ? count : wordCount[senders[i]] + count;
//     if (wordCount[senders[i]]  > maxCount || (wordCount[senders[i]]  == maxCount && senders[i] > result)) {
//         maxCount = wordCount[senders[i]];
//         result = senders[i];
//     }
// }
// return result;

console.log(largestWordCount(messages, senders));
