/**
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 * attempted study Dynamic programming
 *
 */

const isInterleave = (s1, s2, s3) => {
  const obj1 = countLetters(s1);
  const obj2 = countLetters(s2);

  //   console.log(obj1);
  //   console.log(obj2);
  //   console.log(obj3);

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < s3.length; i++) {
    const currVal = s3[i];
    if (obj1[currVal] > 0) {
      arr1.push(currVal);
      obj1[currVal] -= 1;
    } else if (obj2[currVal] > 0) {
      arr2.push(currVal);
      obj2[currVal] -= 1;
    }
  }

  console.log(arr1);
  console.log(arr2);
};

const countLetters = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  return obj;
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
