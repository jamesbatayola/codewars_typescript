// Description:
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)
// Description:
// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo" 
var encryptThis = function (str) {
    var word = str.split(" ");
    var res = word.map(function (e) {
        var first = "".concat(e.charCodeAt(0));
        return e.length > 3 ? "".concat(first).concat(e[e.length - 1]).concat(e.slice(2, e.length - 1)).concat(e[1]) :
            e.length === 3 ? "".concat(first).concat(e[e.length - 1]).concat(e[1]) :
                e.length === 2 ? "".concat(first).concat(e[1]) :
                    e.length === 1 ? first : "";
    });
    return res.join(" ");
};
// convert 1st letter to binary
// switched 2nd and last index of the string
console.log(encryptThis("Hello"));
