import { fizzBuzz } from './index';

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` and return 5 answers in array', () => {
  const ans = [1, 2, 'fizz', 4, 'buzz'];

  expect(fizzBuzz(5)).toEqual(ans);
});

test('Calling fizzbuzz with `15` and return 15 answers in array', () => {
  const ans = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
  ];

  expect(fizzBuzz(15)).toEqual(ans);
});
