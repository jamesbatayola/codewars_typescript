"use strict";
// Description:
// Your task, is to create N×N multiplication table, of size provided in parameter.
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable = multiplicationTable;
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]
function multiplicationTable(size) {
    const res = [];
    for (let i = 1; i <= size; i++) {
        let count = i;
        const temp = [];
        for (let j = 0; j < size; j++) {
            temp.push(count);
            count += i;
        }
        res.push(temp);
    }
    return res;
}
// console.log(multiplicationTable(1));
// console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
//# sourceMappingURL=06.js.map