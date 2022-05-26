import { CustomArray } from '../custom-array';

test('can push elements in array', () => {
  const nums = new CustomArray<number>();
  nums.push(1, 2, 3, 4);

  expect(nums.data).toEqual({ '0': 1, '1': 2, '2': 3, '3': 4 });
});

test('can get elements at certain index', () => {
  const nums = new CustomArray<number>();
  nums.push(1, 2, 3, 4);

  expect(nums.get(1)).toBe(2);
  expect(nums.get(nums.length - 1)).toBe(4);

  expect(() => nums.get(4)).toThrowError();
  expect(() => nums.get(4)).toThrowError('Index out of bounds');
});

test('can pop elements', () => {
  const nums = new CustomArray<number>();
  nums.push(1, 2, 3, 4);

  expect(nums.pop()).toBe(4);
  expect(nums.pop()).toBe(3);
  expect(nums.pop()).toBe(2);
  expect(nums.pop()).toBe(1);
  expect(nums.pop()).toBe(undefined);
});

test('can delete elements', () => {
  const nums = new CustomArray<number>();
  nums.push(1, 2, 3, 4);

  expect(nums.delete(0)).toBe(1);
  expect(nums.delete(1)).toBe(3);
  expect(nums.delete(1)).toBe(4);
  expect(() => nums.delete(1)).toThrowError('Index out of bounds');
});

test('can shift items', () => {
  const nums = new CustomArray<number>();
  nums.push(1, 2, 3, 4);
  nums.shiftItems(1);

  expect(nums.data).toEqual({ '0': 1, '1': 3, '2': 4 });
});
