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
