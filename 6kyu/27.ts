// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

export function dashatize(num: number): string {
	num = Math.abs(num);

	if (num < 10) return `${num}`;

	const numArr = `${num}`.split("").map(Number);

	let res = `${numArr[0]}`;

	res += Number(res.slice(-1)) % 2 === 0 ? "" : "-";

	for (let i = 1; i < numArr.length; i++) {
		if (numArr[i] % 2 === 0) {
			res += numArr[i];
		} else {
			if (res.slice(-1) === "-") {
				if (i === numArr.length - 1) {
					res += `${numArr[i]}`;
				} else {
					res += `${numArr[i]}-`;
				}
			} else {
				if (i === numArr.length - 1) {
					res += `-${numArr[i]}`;
				} else {
					res += `-${numArr[i]}-`;
				}
			}
		}
	}

	return res;
}

console.log(dashatize(32));
console.log(dashatize(-543651));
console.log(dashatize(586073322));

console.log(dashatize(274));
console.log(dashatize(6815));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));

console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));

// CLEVER //

export const _dashatize = (num: number) =>
	`${num}`
		.replace(/([13579])/g, "-$1-")
		.replace(/--/g, "-")
		.replace(/^-|-$/g, "");
