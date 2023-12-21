function fac(n) {
  if (n < 0) {
    return n;
  }
  n *= fac(n - 1);
  return n;
}
console.log(fac(4));