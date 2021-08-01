const selectionSort = (nums: number[]): void => {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        let temp = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) min = j;
        }

        nums[i] = nums[min];
        nums[min] = temp;
    }
};
