"use strict";

// given a value n, determine if n is a power of two or not

function power(n) {
  for (let i = 0; i < n; i++) {
    if (2 ** i === n) return true;
  }
  return false;
}

// big o is o(n)
console.log(power(1));
console.log(power(2));
console.log(power(5));
console.log(power(9));
console.log(power(16));
console.log(power(8));

// another way to acheive this is
function power2(n) {
  while (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}
// big o = o(logn)

console.log("____2nd method_____");
console.log(power2(2));
console.log(power2(5));
console.log(power2(9));
console.log(power2(16));
console.log(power2(8));

// using the bitwise operation
