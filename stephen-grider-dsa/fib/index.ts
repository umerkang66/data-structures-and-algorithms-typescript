//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//  [0, 1, 2, 3, 4 ,5 ,6,  7,  8,  9]

// O(n - 1) => O(n)
export function fib(n: number): number {
  let previousNum = 0;
  let currentNum = 1;

  for (let i = 2; i <= n; i++) {
    const temp = currentNum;
    currentNum += previousNum;
    previousNum = temp;
  }

  return currentNum;
}

// O(2^n)
export function fibRecursive(n: number): number {
  // Although value of 2 in always the same that is "1", but we are manually calculating here
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// O(n - 1) => O(n) => both time and space
export function fibRecMemo() {
  interface Hash {
    [key: number]: number;
  }
  const hash: Hash = {};

  return function fib(n: number): number {
    if (hash[n]) return hash[n];
    // Although value of 2 in always the same that is "1", but we are manually calculating here
    if (n < 2) return n;

    hash[n] = fib(n - 1) + fib(n - 2);
    return hash[n];
  };
}

// Memoized generic function, pass whatever function we want to memoize
// "T" is type of function, and "k" is arguments of function is is provided to be memoized
function memoized<T extends Function, k>(fn: T) {
  interface Cache {
    [key: string]: k;
  }
  const cache: Cache = {};

  return function (...args: k[]) {
    if (cache[JSON.stringify(args)]) return cache[JSON.stringify(args)];

    const result = fn(...args);
    cache[JSON.stringify(args)] = result;
    return result;
  };
}

export function slowFib(n: number): number {
  // Although value of 2 in always the same that is "1", but we are manually calculating here
  if (n < 2) return n;

  // make sure it is calling memoized version of function
  return genericFib(n - 1) + genericFib(n - 2);
}

export const genericFib = memoized<typeof fibRecursive, number>(slowFib);
