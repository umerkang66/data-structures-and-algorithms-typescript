// Time O(n)
export function fibonacciMemo(): (n: number) => number {
  interface Hash {
    [key: number]: number;
  }
  const hash: Hash = {};

  return function memoized(n: number): number {
    if (hash[n]) return hash[n];

    if (n < 2) return n;
    return (hash[n] = memoized(n - 1) + memoized(n - 2));
  };
}
