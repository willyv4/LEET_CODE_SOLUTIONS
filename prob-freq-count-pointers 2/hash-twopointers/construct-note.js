// add whatever parameters you deem necessary
function constructNote(note, msg) {
	const noteHash = makeHash(note);
	const msgHash = makeHash(msg);

	for (let key in noteHash) {
		if (msgHash[key] < noteHash[key] || !msgHash[key]) return false;
	}

	return true;
}

function makeHash(str) {
	let obj = {};
	for (let ltr of str) obj[ltr] = (obj[ltr] || 0) + 1;
	return obj;
}

console.log(constructNote("abc", "abcd"));

module.exports = { constructNote };
