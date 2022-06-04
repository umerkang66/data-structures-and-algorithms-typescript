import { factorial, factorialRecursive } from '../basics/factorial';
import { fibonacci, fibonacciRecursive } from '../basics/fibonacci';

test('can return correct FACTORIAL', () => {
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
  expect(factorial(6)).toBe(720);

  expect(factorialRecursive(3)).toBe(6);
  expect(factorialRecursive(4)).toBe(24);
  expect(factorialRecursive(5)).toBe(120);
  expect(factorialRecursive(6)).toBe(720);
});

test('cn return correct FIBONACCI no.', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(7)).toBe(13);
  expect(fibonacci(8)).toBe(21);

  expect(fibonacciRecursive(0)).toBe(0);
  expect(fibonacciRecursive(1)).toBe(1);
  expect(fibonacciRecursive(2)).toBe(1);
  expect(fibonacciRecursive(3)).toBe(2);
  expect(fibonacciRecursive(4)).toBe(3);
  expect(fibonacciRecursive(5)).toBe(5);
  expect(fibonacciRecursive(6)).toBe(8);
  expect(fibonacciRecursive(7)).toBe(13);
  expect(fibonacciRecursive(8)).toBe(21);
});
