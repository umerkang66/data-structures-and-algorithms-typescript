// Fibonacci sequence
const fibonacciRecursive = (num: number): number => {
    if (num < 2) return num;
    return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
};

console.log(fibonacciRecursive(6));

// Fibonacci sequence memoized
const fibonacciMaster = (): Function => {
    interface Cache {
        [key: number]: number;
    }

    const cache: Cache = {};

    return function fib(num: number): number {
        if (cache[num]) return cache[num];
        if (num < 2) return num;
        else return (cache[num] = fib(num - 2) + fib(num - 1));
    };
};

const fibonacciMemoized = fibonacciMaster();
console.log(fibonacciMemoized(50));
