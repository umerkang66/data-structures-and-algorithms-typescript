// Use insertion sort if you have only a few items and items that are mostly sorted
const insertionSort = (nums: number[]): void => {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let j = i - 1;

        while (nums[j] > current && j >= 0) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = current;
    }
};
