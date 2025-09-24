// Reducing by rules to get the result
// Your task is to reduce a list of numbers to one number.
// For this you get a list of rules, how you have to reduce the numbers.
// You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.

// An example is clearer than more words...

// numbers: [ 2.0, 2.0, 3.0, 4.0 ]
// rules: [ (a,b) => a + b, (a,b) => a - b ]
// result: 5.0

// You get a list of four numbers.
// There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

// The steps in progressing:
// 1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
// 2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
// 3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0
// Both lists/arrays are never null and will always contain valid elements.
// The list of numbers will always contain more than 1 numbers.
// In the list of numbers will only be values greater than 0.
// Every rule takes always two input parameter.

type RuleFunction = (a: number, b: number) => number;

// let rules: RuleFunction[] = [(a, b) => a + b, (a, b) => a - b];

export function reduceByRules(nums: number[], rules: RuleFunction[]): number {
	let count = 0;

	while (nums.length > 1) {
		const _num = rules[count](nums[0], nums[1]);

		if (rules.length - 1 === count) {
			count = 0;
		} else {
			count++;
		}

		if (nums.length === 2) {
			nums = [_num];
		} else {
			nums = [_num, ...nums.slice(2)];
		}
	}
	return nums[0];
}

let r1: RuleFunction[] = [(a, b) => a + b];

console.log(reduceByRules([2.0, 2.0, 2.0], r1));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], r1));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], r1));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], r1));

let r2: RuleFunction[] = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

console.log(reduceByRules([2.0, 2.0, 2.0], r2));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], r2));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], r2));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], r2));
