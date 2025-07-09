"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = createPhoneNumber;
function createPhoneNumber(numbers) {
    if (numbers.length <= 0 || numbers.length > 10)
        return "";
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join("")}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//# sourceMappingURL=03.js.map