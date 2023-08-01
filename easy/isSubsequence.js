function isSubsequence(word, letters) {
	if ((word === "") & (letters === "")) return true;
	if (word !== letters && word.length === letters.length) return false;
	if (word.length > letters.length) return false;

	let wordIndex = 0;
	for (let i = 0; i < letters.length; i++) {
		if (word[wordIndex] === letters[i]) {
			wordIndex++;
		}
		if (wordIndex === word.length) {
			return true;
		}
	}

	return false;
}
