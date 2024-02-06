export function insertionSort(nums: number[]) {
  // pick an element from unsorted part, and place it at the left position.
  // don't go till last element because, j is "i+1"
  for (let i = 0; i < nums.length - 1; i++) {
    // at every index, check if next element to ith element is greater or less than
    // ith element, it it is greater swap them
    for (let j = i + 1; j > 0; j--) {
      // "j" should not go to 0, because we are checking "j-1"
      if (nums[j] < nums[j - 1]) {
        // SWAP
        const temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        // if "j" is not smaller than "j-1" it means previous to the "j" elements are
        // already sorted, so break the inner loop, because outer loop
        // has already gone through previous elements
        break;
      }
    }
  }
}
