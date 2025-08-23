// Description:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

export const digitalRoot = (n: number): number => {
  if (n < 10 && n >= 0) return n;
  if (n === 10) return 1;

  while (n > 10) {
    const numString: number[] = `${n}`.split("").map((x) => Number(x));
    n = numString.reduce((a, b) => a + b);
  }

  return n;
};

let t1 = 16;
let t2 = 942;
let t3 = 132189;
let t4 = 493193;

console.log(digitalRoot(t1));
console.log(digitalRoot(t2));
console.log(digitalRoot(t3));
console.log(digitalRoot(t4));
