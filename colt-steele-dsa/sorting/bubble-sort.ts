export function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let isSwap = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // swap
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        isSwap = true;
      }
    }
    // if there wasn't a single swap
    // it means every jth element is smaller
    // than the every j+1th element
    if (!isSwap) {
      break;
    }
  }
}
