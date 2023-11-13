"use strict";

// giving the number n, find the first n element of the fiblnacci sequence
// in mathematics, fibonacci sequence is  a sequence in which each number is the sum of two preceeding once, starting from zeor or any other positive interger

// fibonacci 2 = [0, 1]
// fibonacci 3 = [0, 1, 1]
// fibonacci 5 = [0, 1, 1, 2,3]

function fiblnacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fiblnacci(2)); // [0, 1]
console.log(fiblnacci(3)); // [0, 1, 1]
console.log(fiblnacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// big O of the fibonacci sequence
1 + (4 - 2) + 1