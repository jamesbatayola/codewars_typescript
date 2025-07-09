// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word: string) {
	let res = "";
	const _word = word.toLocaleLowerCase();

	const map = new Map();

	for (let letter of _word) {
		if (!map.has(letter)) {
			map.set(letter, 1);
		} else {
			map.set(letter, map.get(letter) + 1);
		}
	}

	for (let letter of _word) {
		res += map.get(letter) > 1 ? ")" : "(";
	}

	return res;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
