function vowelFrequency(string) {
  const result = [];
  const object = {};
  const vowels = "aeiou";

  // loop over each individual letter of str
  for (let letter of string) {
    // check if the letter is a vowel - if it is not a vowel it skips everything and checks the next letter
    if (vowels.includes(letter)) {
      // check if object object already has the key letter
      if (object[letter]) {
        object[letter] += 1; // add 1 to the value assigned to letter
      } else {
        object[letter] = 1; // add key letter to object with a value of 1
      }
    }
  }

  // access our result object
  for (let vowel in object) {
    // add object key to the end of the array - key will be the actual key in the object
    result.push(vowel);
    // add object value to the end of the array - you can access a value of an object by passing in the key
    result.push(object[vowel]);
  }

  // result equals an array of vowels and counts something like [e,1,o,2] to turn it to a string we can use the join method which joins the array together depening on what you pass into it. so we passed in "" meaning join the array with nospaces
  return result.join("");
}

console.log(vowelFrequency("hello"));
