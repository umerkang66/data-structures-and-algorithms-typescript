export function fibonacci(n: number): number {
  if (n < 2) {
    // Here value of 2 is being calculated, we can avoid that , because value of 2 is always 1, but here previous, and current both should be 1
    return n;
  }
  let previous = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    const temp = current;
    current += previous;
    previous = temp;
  }
  return current;
}

export function fibonacciRecursive(n: number): number {
  if (n < 2) {
    // Here value of 2 is being calculated, we can avoid that , because value of 2 is always 1
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
