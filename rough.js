function P(n) {
  for (let i = 0; i < n; i++) {
    if (2 ** i === n) {
      return true;
    }
  }
  return false;
}
console.log(P(1));
console.log(P(2));
console.log(P(5));
console.log(5 & 4);
console.log((5).toString(2));
console.log((4).toString(2));
console.log((10).toString(2));
console.log((9).toString(2));

// fib
function fib(n) {
  let seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq[i] = seq[i - 2] + seq[i - 1];
  }
  return seq;
}

console.log(fib(10));

// fac
function fac(n) {
  num = 1;
  for (i = n; i > 0; i--) {
    num *= i;
  }
  return num;
}

console.log(fac(4));
console.log(fac(5));
