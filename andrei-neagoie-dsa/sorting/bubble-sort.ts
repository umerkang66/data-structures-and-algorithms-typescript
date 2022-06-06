export function bubbleSort(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    // at every outer iteration, largest element will be at last, so don't need to check the last item
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const higher = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = higher;
      }
    }
  }
}

export function bubbleSort2(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    // at every outer iteration, largest element will be at last, so don't need to check the last item
    for (let j = i + 1; j < nums.length - i; j++) {
      if (nums[i] > nums[j]) {
        const higher = nums[i];
        nums[i] = nums[j];
        nums[j] = higher;
      }
    }
  }
}
