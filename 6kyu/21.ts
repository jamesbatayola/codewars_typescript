// Description:
// Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. The X will be represented by 1's and the rest will be 0's.

// Examples
// 5 --->   [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]]

// 6  --->  [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]]

export function x(n: number): number[][] {
  const matrix: number[][] = [];

  const mid = Math.floor(n / 2);

  // Middle sub array
  const midSub = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (mid % 2 === 0 || n >= 3) {
      midSub[mid] = 1;
    } else {
      midSub[mid] = 1;
      midSub[mid - 1] = 1;
    }
    //
  }

  // Mid sub array placement
  if (mid % 2 === 0) {
    matrix[mid] = midSub;
  } else {
    matrix[mid] = midSub;
    matrix[mid - 1] = midSub;
  }

  for (let i = 0; i < mid; i++) {
    const temp: number[] = [];

    for (let j = 0; j < n; j++) {
      if (i === j || n - 1 - i === j) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }

    matrix[i] = temp;
    matrix[n - 1 - i] = temp;
  }

  return matrix;
}

console.log(x(1));
console.log(x(2));
console.log(x(3));
console.log(x(4));
console.log(x(5));
console.log(x(6));
