// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
  const _words: string[] = words.split(" ");

  const res: string[] = _words.map((word) => {
    if (word.length >= 5) {
      let temp = "";
      for (let i = word.length - 1; i >= 0; i--) {
        temp += word[i];
      }
      return temp;
    } else {
      return word;
    }
  });

  return res.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is another test"));

// CLEVER VERSION

export function _spinWords(words: string): string {
  return words
    .split(" ")
    .map((el) => (el.length >= 5 ? _reverse(el) : el))
    .join(" ");
}

const _reverse = (str: string): string => {
  return str.split("").reverse().join("");
};
