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
