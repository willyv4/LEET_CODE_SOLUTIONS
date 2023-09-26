const reverseWords = (s) => {
	let arr = [];
	s.trim()
		.split(" ")
		.filter((s) => s !== "")
		.map((a) => arr.unshift(a));

	return arr.join(" ");
};

console.log(reverseWords("farse hello tinkc sperm"));
