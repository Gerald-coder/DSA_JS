//
let num = 1;
function show() {
  console.log("Gerald" + num);
  num++;
  show();
}

// show();

function countDown(n) {
  if (n <= 0) {
    console.log("yaa yaa");
    return;
  }
  console.log(n);
  n = n - 1;
  countDown(n);
}
// countDown(5);

// array sum
function arrSum(n) {
  let sum = 0;
  if (n.lenth === 0) {
    return;
  }
  sum += n;
  n.pop();
  arrSum(n);
  console.log(sum);
}

// sum num
function sumNum(t) {
  let total = 0;
  if (t <= 0) {
    return total;
  }
  total + t;
  return sumNum(t - 1);
}
// console.log(sumNum(3));

function sumNum2(n, sum = 0) {
  if (n <= 0) {
    return sum;
  }

  return sumNum2(n - 1, (sum += n));
}
// console.log(sumNum2(3));

//
function printN(n = 1) {
  if (n > 10) {
    return;
  }
  console.log(n);
  printN(n + 1);
}
// printN();

// fib recurse
function fib(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 2] + seq[i - 1];
  }
  return seq;
}

// console.log(fib(8));

function fibRecursion(n) {
  let ray = [0, 1]; // the error in thiis code even though it should work is that, each time you call the function ,you stil create the new array with [0,1] , loosing the previous changes made , to solve this, pass the array as an argument to  the function as below
  if (n > 10) {
    return;
  }
  ray[n] = ray[n - 2] + ray[n - 1];
  n++;
  fibRecursion(n);
  return ray;
}
// console.log(fibRecursion(2));

function fibRecursion2(n, ray = [0, 1]) {
  if (n > 10) {
    return ray;
  }
  ray[n] = ray[n - 2] + ray[n - 1];
  fibRecursion2(n + 1, ray);
  return ray;
}
// console.log(fibRecursion2(2));

// returning the nth term in a fib
function fibPos1(n, ray = [0, 1]) {
  for (let i = 2; i <= n; i++) {
    ray[i] = ray[i - 2] + ray[i - 1];
  }
  return ray[n];
}

// console.log(fibPos1(6));
function fibPos(n) {
  if (n < 2) {
    return n;
  }
  return fibPos(n - 1) + fibPos(n - 2);
}

console.time("fib");
console.log(fibPos(6));
console.timeEnd("fib");

function fibMemoization(n, memo = {}) {
  // Base case: If n is 0 or 1, return n
  if (n < 2) {
    return n;
  }

  // Check if the value for 'n' is already memoized
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Recursive case: Calculate Fibonacci number for 'n' and memoize the result
  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  console.log(memo);

  return memo[n];
}

// Example usage:
console.time("fib2");
console.log(fibMemoization(6)); // Outputs: 8
console.timeEnd("fib2");
