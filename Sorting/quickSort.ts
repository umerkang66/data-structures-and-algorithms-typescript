const swap = (nums: number[], leftIndex: number, rightIndex: number): void => {
    const temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
};

const partition = (nums: number[], left: number, right: number): number => {
    const pivot = nums[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, partitionIndex, i);
            partitionIndex++;
        }
    }

    swap(nums, partitionIndex, right);
    return partitionIndex;
};

const quickSort = (nums: number[], left: number, right: number): void => {
    if (left < right) {
        const partitionIndex = partition(nums, left, right);
        quickSort(nums, left, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, right);
    }
};
