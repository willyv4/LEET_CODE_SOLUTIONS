const case1 = "   fly me   to   the moon  ";

const lengthOfLastWord = (s) => {
  const eachWord = s.split(" ").filter((w) => w !== "");
  return eachWord[eachWord.length - 1].split("").length;
};
