// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

export const high = (str: string): string => {
	const words = str.split(" ");

	let res = "";
	let highest = 0;

	for (let word of words) {
		let count = 0;
		for (let letter of word) {
			count += letter.charCodeAt(0) - 96;
		}

		if (res === "") {
			res = word;
			highest = count;
		} else {
			if (highest < count) {
				res = word;
				highest = count;
			}
		}
	}

	return res;
};

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("massage yes massage yes massage"));
console.log(high("take two bintang and a dance please"));
