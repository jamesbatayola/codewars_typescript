// Description:
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

export function adjacentElementsProduct(arr: number[]): number {
	if (arr.length === 2) return arr[0] * arr[1];

	let currHighest = Math.max(arr[0] * arr[1], arr[1] * arr[2]);

	for (let i = 2; i < arr.length - 1; i++) {
		const highest = Math.max(arr[i - 1] * arr[i], arr[i] * arr[i + 1]);
		if (currHighest < highest) {
			currHighest = highest;
		}
	}

	return currHighest;
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
