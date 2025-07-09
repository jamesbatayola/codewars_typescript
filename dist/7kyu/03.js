"use strict";
// Description:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = number;
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
function number(array) {
    return array.map((y, i) => `${i + 1}: ${y}`);
}
// console.log(number(["a", "c", "b"]));s
console.log(number([
    "ª",
    "e",
    "c",
    "",
    "",
    "y",
    "",
    "",
    "",
    "",
    "j",
    "h",
    "u",
    "",
    "¡",
    "§",
    "",
    "¢",
    "d",
    "p",
    "©",
    "c",
    "§",
    "",
    "z",
    "d",
    "|",
    "p",
    "t",
    "c",
    "d",
]));
//# sourceMappingURL=03.js.map