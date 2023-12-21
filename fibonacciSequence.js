"use strict";

// giving the number n, find the first n element of the fiblnacci sequence
// in mathematics, fibonacci sequence is  a sequence in which each number is the sum of two preceeding once, starting from zeor or any other positive interger

function fiblnacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
// console.log(fiblnacci(2)); // [0, 1]
// console.log(fiblnacci(3)); // [0, 1, 1]
// console.log(fiblnacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// big O of the fibonacci sequence
1 + (4 - 2) + 1;

// with recursion
function fibonacciRecur(n, ray = [0, 1]) {
  if (n < 2) {
    return ray;
  }
  ray[ray.length] = ray[ray.length - 2] + ray[ray.length - 1];
  // ray[n] = ray[n - 2] + ray[n - 1];
  return fibonacciRecur(n - 1, ray);
}

console.log(fibonacciRecur(0));
console.log(fibonacciRecur(1));
console.log(fibonacciRecur(5));

// to find the nth term of a recursion array
// with recursion
function fibonacciRecur(n, ray = [0, 1]) {
  if (n < 2) {
    return ray[n];
  }
  ray[ray.length] = ray[ray.length - 2] + ray[ray.length - 1];
  // ray[n] = ray[n - 2] + ray[n - 1];
  fibonacciRecur(n - 1, ray);
  return ray[n];
}

console.log(fibonacciRecur(0)); // 0
console.log(fibonacciRecur(1)); // 1
console.log(fibonacciRecur(6)); // 8

// a more shorter form
function shorterRecur(n) {
  if (n < 2) {
    return n;
  }
  return shorterRecur(n - 2) + shorterRecur(n - 1);
}
console.log(shorterRecur(9)); // 34
console.log(shorterRecur(0)); // 0
