/**
 *
 * given an array with pound signs in it
 * delete the pound sign and the account of count pound signs occurences with
 * the following character
 *
 *
 *  ddfg##hc# => ddh
 *
 *
 */

const removePoundSign = (str1, str2) => removeChars(str1) === removeChars(str2);

function removeChars(str) {
  const arr = [];
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "#") {
      count++;
      continue;
    } else {
      if (count < 1) arr.push(str[i]);
      count--;
      if (count < 0) count = 0;
    }
  }

  console.log(arr);

  return arr.join("");
}

// console.log(removePoundSign("dd#fg##hc#", "dd#fg##hc#")); // true
// console.log(removePoundSign("abc#def#ghi", "abc#def#ghi")); // true
// console.log(removePoundSign("1234#", "1234#")); // true
console.log(removePoundSign("xy#z##", "x#yz#")); // true
// console.log(removePoundSign("abc#", "abcd")); // false
// console.log(removePoundSign("a#b#c#d#", "abcd")); // false
// console.log(removePoundSign("x#y#z#", "xyz")); // false
