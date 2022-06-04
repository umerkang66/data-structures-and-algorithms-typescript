export function factorial(n: number): number {
  let ans = 1;
  while (n > 1) {
    // multiplying with 1 returns the same answer, so just return the answer
    ans *= n;
    n = n - 1;
  }
  return ans;
}

export function factorialRecursive(n: number, ans: number = 1): number {
  if (n <= 1) {
    // multiplying with 1 returns the same answer, so just return the answer
    return ans;
  }
  return factorialRecursive(n - 1, ans * n);
}
