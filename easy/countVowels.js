const countVowels = (string) => {
	let vowelCount = {};
	let vowels = new Set("aeiou");

	for (let ltr of string.toLowerCase().split("")) {
		if (!vowels.has(ltr)) continue;
		vowelCount[ltr] = (vowelCount[ltr] || 0) + 1;
	}

	return vowelCount;
};

console.log(countVowels("Hello World"));
