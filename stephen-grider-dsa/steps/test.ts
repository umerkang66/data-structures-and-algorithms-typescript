import { steps, stepsRecursive } from './index';

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
  expect(typeof stepsRecursive).toEqual('function');
});

test('steps called with n = 1', () => {
  const ans = '#';

  expect(steps(1)).toEqual(ans);
  expect(stepsRecursive(1, 1, 1, '')).toEqual(ans);
});

test('steps called with n = 2', () => {
  const ans = '#\n##';

  expect(steps(2)).toEqual(ans);
  expect(stepsRecursive(2, 1, 1, '')).toEqual(ans);
});

test('steps called with n = 3', () => {
  const ans = '#\n##\n###';

  expect(steps(3)).toEqual(ans);
  expect(stepsRecursive(3, 1, 1, '')).toEqual(ans);
});
