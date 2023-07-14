const case1 = "   fly me   to   the moon  ";

const lengthOfLastWord = (s) => {
  const eachWord = s.split(" ").filter((w) => w !== "");
  return eachWord[eachWord.length - 1].split("").length;
};

const lengthOfLastWord2 = (s) => s.trim().split(" ").pop().length;

const nospaces = case1.trim().split(" ").pop().length;
console.log(nospaces);
