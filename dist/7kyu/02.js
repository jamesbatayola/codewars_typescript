"use strict";
// Description:
// Given the triangle of consecutive odd numbers:
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowSumOddNumbers = rowSumOddNumbers;
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
    let total_digit = 0;
    for (let i = n; i > 0; i--) {
        total_digit += i;
    }
    let arr = [];
    let count = 1;
    for (let i = 0; i < total_digit; i++) {
        arr.push(count);
        count += 2;
    }
    return arr.slice(arr.length - n).reduce((a, b) => a + b);
}
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
//# sourceMappingURL=02.js.map