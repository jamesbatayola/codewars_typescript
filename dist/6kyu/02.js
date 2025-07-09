"use strict";
// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = arrayDiff;
// Examples
// If a = [1, 2] and b = [1], the result should be [2].
// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
function arrayDiff(a, b) {
    return a.filter((num) => !b.includes(num));
}
const a = [1, 2];
const b = [1];
console.log(arrayDiff(a, b));
const c = [1, 2, 2, 2, 3];
const d = [2];
console.log(arrayDiff(c, d));
//# sourceMappingURL=02.js.map