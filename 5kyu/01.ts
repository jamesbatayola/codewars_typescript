export function josephusSurvivor(n: number, k: number) {
	const numArr = [];
	for (let i = 1; i <= n; i++) {
		numArr.push(i);
	}
	let count = k;
	while (numArr.length > 1) {
		while (count > numArr.length) {
			count -= numArr.length;
		}
		numArr.splice(count - 1, 1);
		count += k - 1;
	}
	return numArr[0];
}

console.log(josephusSurvivor(7, 3));
console.log(josephusSurvivor(11, 19));
console.log(josephusSurvivor(40, 3));
console.log(josephusSurvivor(14, 2));
console.log(josephusSurvivor(100, 1));
console.log(josephusSurvivor(1, 300));
