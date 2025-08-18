// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

export function _order(words: string): string {
  if (words === "") return "";

  const _words = words.split(" ");

  _words.sort((a, b) => Number(a.match(/[1-9]/)) - Number(b.match(/[1-9]/)));

  return _words.join(" ");
}

let t1 = "is2 Thi1s T4est 3a";
let t2 = "4of Fo1r pe6ople g3ood th5e the2";

console.log(_order(t1));
console.log(_order(t2));
