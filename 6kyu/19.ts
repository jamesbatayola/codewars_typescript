// Description:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd)

export const findOdd = (xs: number[]): number => {
  let obj: { [key: number]: number } = {};

  for (let num of xs) {
    if (!obj[num]) obj[num] = 1;
    else obj[num]++;
  }

  for (const [key, val] of Object.entries(obj)) {
    if (val % 2 !== 0) return Number(key);
  }

  return 0;
};

let t1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
let t2 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
let t3 = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];

console.log(findOdd(t1));
