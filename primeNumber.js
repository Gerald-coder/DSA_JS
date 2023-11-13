"use strict";

// PRIME NUMBER
// a prime number is a natural number greater than one that can not be expressed as a product of any two smaller natural numbers, or a number that is only divisible by one and itself

function Isprime(n) {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(Isprime(5)); // true
console.log(Isprime(4)); // false
console.log(Isprime(9)); // false
console.log(Isprime(17)); // true
// time complexity is linear O(n)

// a more optimized approach
console.log("______more optimal way_______");
// reason because, if value of n is 100, the code runs 10 times which is the square root of n, and the number of times the loop runs, then the time complexity is O(square(n))
function prime(n) {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(prime(5)); // true
console.log(prime(4)); // false
console.log(prime(9)); // false
console.log(prime(17)); // true
