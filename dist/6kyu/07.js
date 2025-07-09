"use strict";
// Description:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = encode;
exports.decode = decode;
exports._encode = _encode;
exports._decode = _decode;
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
// turn vowels into numbers
function encode(string) {
    let res = "";
    const encode_code = {
        a: "1",
        e: "2",
        i: "3",
        o: "4",
        u: "5",
    };
    for (let _char of string) {
        "aeiou".includes(_char) && _char === _char.toLowerCase() ? (res += encode_code[_char]) : (res += _char);
    }
    return res;
}
// turn numbers back into vowels
function decode(string) {
    let res = "";
    const decode_code = {
        "1": "a",
        "2": "e",
        "3": "i",
        "4": "o",
        "5": "u",
    };
    for (let _char of string) {
        "12345".includes(_char) && _char === _char.toLowerCase() ? (res += decode_code[_char]) : (res += _char);
    }
    return res;
}
console.log(encode("hello"));
console.log(decode("h2ll4"));
// CLEVER
const vowels = "aeiou";
// turn vowels into numbers
function _encode(string) {
    return string.replace(/[aeiou]/g, (x) => (vowels.indexOf(x) + 1).toString());
}
// turn numbers back into vowels
function _decode(string) {
    return string.replace(/[1-5]/g, (x) => vowels.charAt(parseInt(x) - 1));
}
//# sourceMappingURL=07.js.map