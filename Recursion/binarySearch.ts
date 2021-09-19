const binarySearch = (
  nums: number[],
  left: number,
  right: number,
  search: number
): number => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === search) return mid;

  if (search < nums[mid]) {
    return binarySearch(nums, left, mid - 1, search);
  } else {
    return binarySearch(nums, mid + 1, right, search);
  }
};
