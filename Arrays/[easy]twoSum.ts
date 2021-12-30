const numsArr = [1, 3, 7, 9, 2];
const numsArr2 = [3, 3];
const target = 11;
const target2 = 6;

// brute force solution
const twoSumBruteForce = (numsArr: number[], target: number) => {
  const len = numsArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (numsArr[i] + numsArr[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};

console.log(twoSumBruteForce(numsArr, target));
console.log(twoSumBruteForce(numsArr2, target2));

const twoSum = (nums: number[], target: number): number[] => {
  interface SumHash {
    [index: number]: number;
  }
  // In the sumHash the number will be key, and the index will be value
  const sumHash: SumHash = {};
  for (let i = 0; i < nums.length; i++) {
    // We are checking arrayValues with zero because indexes are stored as value, and arrayValues are stored as keys, if the below (if answer) is less than zero, it means the answer does not exist in array
    if (sumHash[target - nums[i]] >= 0) {
      return [sumHash[target - nums[i]], i];
    } else {
      // Here we are storing arrayValues as keys, and indexes as values
      sumHash[nums[i]] = i;
    }
  }

  return [];
};

console.log(twoSum(numsArr, target));
console.log(twoSum(numsArr2, target2));
