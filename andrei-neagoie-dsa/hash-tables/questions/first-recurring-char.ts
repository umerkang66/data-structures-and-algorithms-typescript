/**
 * Finds the first recurring element of a numerical or string array. Time complexity is O(n), and space complexity is O(n)
 * @param {Array<number>} nums
 * @returns {number | undefined} First repeated symbol, or undefined if none
 */
export function firstRecurringChar(nums: number[]): number | undefined {
  interface Seen {
    [key: number]: boolean | undefined;
  }

  const seen: Seen = {};

  for (let i = 0; i < nums.length; i++) {
    // Because 0 is falsy value
    if (seen[nums[i]] !== undefined) return nums[i];
    else seen[nums[i]] = true;
  }

  return undefined;
}
