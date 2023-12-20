// function P(n) {
//   for (let i = 0; i < n; i++) {
//     if (2 ** i === n) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(P(1));
// console.log(P(2));
// console.log(P(5));
// console.log(5 & 4);
// console.log((5).toString(2));
// console.log((4).toString(2));
// console.log((10).toString(2));
// console.log((9).toString(2));

// prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(6)); //
// console.log(isPrime(5)); //
// console.log(isPrime(4)); // false
// console.log(isPrime(9)); // false
// console.log(isPrime(17)); // true

// power of two
function power(n) {
  for (let x = 0; x < 10; x++) {
    if (n === 2 ** x) {
      return true;
    }
  }
  return false;
}
console.log(power(1));
console.log(power(2));
console.log(power(5));

function power2(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(power2(1));
console.log(power2(2));
console.log(power2(5));
