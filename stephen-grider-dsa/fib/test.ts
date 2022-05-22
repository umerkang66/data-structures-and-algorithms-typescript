import { fib, fibRecursive, fibRecMemo, genericFib } from './index';

test('Fib function is defined', () => {
  const fibMemo = fibRecMemo();

  expect(typeof fib).toEqual('function');
  expect(typeof fibRecursive).toEqual('function');
  expect(typeof genericFib).toEqual('function');
  expect(typeof fibMemo).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  const fibMemo = fibRecMemo();

  expect(fibRecursive(1)).toEqual(1);
  expect(fibMemo(1)).toEqual(1);
  expect(genericFib(1)).toEqual(1);
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  const fibMemo = fibRecMemo();

  expect(fibRecursive(2)).toEqual(1);
  expect(fibMemo(2)).toEqual(1);
  expect(genericFib(2)).toEqual(1);
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  const fibMemo = fibRecMemo();

  expect(fibRecursive(3)).toEqual(2);
  expect(fibMemo(3)).toEqual(2);
  expect(genericFib(3)).toEqual(2);
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  const fibMemo = fibRecMemo();

  expect(fibRecursive(4)).toEqual(3);
  expect(fibMemo(4)).toEqual(3);
  expect(genericFib(4)).toEqual(3);
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 39', () => {
  const fibMemo = fibRecMemo();

  expect(fibRecursive(39)).toEqual(63245986);
  expect(fibMemo(39)).toEqual(63245986);
  expect(genericFib(39)).toEqual(63245986);
  expect(fib(39)).toEqual(63245986);
});
