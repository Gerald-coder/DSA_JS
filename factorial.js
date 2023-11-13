"use strict";

// FACTORIAL
// in mathematics, this means the product of all positive values (n) less than or equal that n

const factorial = (n) => {
  let fac = 1;
  if (n >= 0) {
    for (let i = 2; i <= n; i++) {
      fac *= i;
    }
  } else {
    console.log("invalid number");
    return;
  }
  return fac;
};

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));
