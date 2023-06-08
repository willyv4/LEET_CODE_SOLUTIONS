const lengthOfLastWord = (s) => {
  let lastword = [];
  const eachWord = s.split(" ").filter((w) => w !== "");

  for (let i = eachWord.length - 1; i > eachWord.length - 2; i--) {
    lastword.push(eachWord[i]);
  }
  return lastword[0].split("").length;
};
