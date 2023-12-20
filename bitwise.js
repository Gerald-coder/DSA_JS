// bitwise
// AND
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1

// OR
// 0 | 0 = 0
// 0 | 1 = 1
// 1 | 1 = 1

// XOR
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 1 = 0

// converting number to binary
console.log((4).toString(2));

// converting to number from binary
console.log(parseInt("100", 2));

// or
console.log(0b011); // returns a number
console.log((0b011).toString(10)); // returns a numeric string

// bitwise
console.log(1 & 3); // 001 & 011 = 1
console.log(0 & 1); // 000 & 001 = 0

// shift left:   just like adding two zeros at the end
console.log(9 << 2); // 36
console.log(0b1001); // 9
console.log(0b100100); // 36,

// shift right: just like removing the last two binary digits of a value
console.log(9 >> 2); // 2
console.log(0b1001); // 9
console.log(0b10);

// bitwise for powerOf2 algorithm
function power(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(power(1));
console.log(power(2));
console.log(power(5));
