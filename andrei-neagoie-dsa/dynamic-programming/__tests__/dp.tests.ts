import { fibonacciMemo } from '../fibonacci-memoized';

test('can return correct FIBONACCI no.', () => {
  const fibonacciMemoized = fibonacciMemo();

  expect(fibonacciMemoized(0)).toBe(0);
  expect(fibonacciMemoized(1)).toBe(1);
  expect(fibonacciMemoized(2)).toBe(1);
  expect(fibonacciMemoized(3)).toBe(2);
  expect(fibonacciMemoized(4)).toBe(3);
  expect(fibonacciMemoized(5)).toBe(5);
  expect(fibonacciMemoized(6)).toBe(8);
  expect(fibonacciMemoized(7)).toBe(13);
  expect(fibonacciMemoized(8)).toBe(21);
  expect(fibonacciMemoized(44)).toBe(701408733);
  expect(fibonacciMemoized(50)).toBe(12586269025);
});
