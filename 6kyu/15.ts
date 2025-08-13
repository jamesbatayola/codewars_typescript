// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

export function findOutlier(integers: number[]): number {
  let evenCounter = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) evenCounter++;
  }
  if (evenCounter > 1) {
    return Number(findOdd(integers));
  }
  return Number(findEven(integers));
}

const findOdd = (n: number[]) => {
  return n.find((x) => x % 2 !== 0);
};
const findEven = (n: number[]) => {
  return n.find((x) => x % 2 === 0);
};
