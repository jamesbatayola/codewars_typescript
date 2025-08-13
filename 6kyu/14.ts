export function countBits(n: number): number {
  // Program Me
  return n.toString(2).replace("0", "").length;
}

console.log(countBits(1234));
