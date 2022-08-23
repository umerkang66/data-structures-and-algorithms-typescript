export function maxSubarraySum(arr: number[], size: number): number | null {
  if (!arr.length) return null;
  if (size > arr.length) return null;

  let maxSum = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = size - 1;

  while (end < arr.length) {
    let currentWinSum = 0;
    for (let i = start; i <= end; i++) {
      currentWinSum += arr[i];
    }
    maxSum = Math.max(maxSum, currentWinSum);
    start += 1;
    end += 1;
  }

  return maxSum;
}

export function maxSubarraySumSlidingWindow(arr: number[], size: number) {
  if (!arr.length) return null;
  if (size > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  // first add the result of first subarray
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // after after the first subarray
  for (let i = size; i < arr.length; i++) {
    // we have already calculated the sum of previous subarray
    // add the current element "ith" element
    tempSum += arr[i];
    // subtract the first element of previous subarray from tempSum
    tempSum -= arr[i - size];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
