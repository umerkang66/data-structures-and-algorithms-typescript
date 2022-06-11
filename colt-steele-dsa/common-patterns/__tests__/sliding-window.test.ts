import { maxSubarraySum, maxSubarraySumSlidingWindow } from '../sliding-window';

describe('Question MaxSubArray Naive', () => {
  test('returns correct result on valid inputs', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  test('returns null on invalid input', () => {
    expect(maxSubarraySum([], 4)).toBe(null);
    expect(maxSubarraySum([1, 2, 3, 4], 5)).toBe(null);
  });
});

describe('Question MaxSubArray Optimized by Sliding window', () => {
  test('returns correct result on valid inputs', () => {
    expect(maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySumSlidingWindow([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySumSlidingWindow([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  test('returns null on invalid input', () => {
    expect(maxSubarraySumSlidingWindow([], 4)).toBe(null);
    expect(maxSubarraySumSlidingWindow([1, 2, 3, 4], 5)).toBe(null);
  });
});
