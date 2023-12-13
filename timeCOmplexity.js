"use strict";

function summation(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum2(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum2(5));

console.log(summation(4));

// BIG O OF ARRAYS AND OBJECTS AND THEIR METHODS
// an object is a collection of key values pairs
