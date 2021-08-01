const insertionSort = (nums: number[]): void => {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] < nums[0]) {
            //move number to the first position
            nums.unshift(nums.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (nums[i] < nums[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (nums[i] >= nums[j - 1] && nums[i] < nums[j]) {
                        //move number to the right spot
                        nums.splice(j, 0, nums.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
};
