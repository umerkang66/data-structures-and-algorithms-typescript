import { firstRecurringChar } from '../questions';

test('can return first recurring character correctly', () => {
  const nums = [1, 9, 3, 11, 7, 23, 9];
  expect(firstRecurringChar(nums)).toBe(9);
});
