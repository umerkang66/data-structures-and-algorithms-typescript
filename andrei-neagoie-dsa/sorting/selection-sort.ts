export function selectionSort(nums: number[]): void {
  // find the minimum item in second iteration, swap it with the ith element of first iteration
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[min]) {
        // update the minimum if current is lower than we had previously
        min = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
}
