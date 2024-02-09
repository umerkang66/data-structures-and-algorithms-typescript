// RADIX SORT
export function radixSort(nums: number[]) {
  const maxDigit = getMaxDigits(nums);

  for (let i = 0; i < maxDigit; i++) {
    const digitBucket = Array.from({ length: 10 }, () => [] as number[]);

    for (let j = 0; j < nums.length; j++) {
      const lastDigit = getDigit(nums[j], i);
      digitBucket[lastDigit].push(nums[j]);
    }

    let index = 0;
    for (let k = 0; k < digitBucket.length; k++) {
      if (digitBucket[k].length) {
        for (let l = 0; l < digitBucket[k].length; l++) {
          nums[index++] = digitBucket[k][l];
        }
      }
    }
  }
}

// HELPER ude, you haven't stopped posting music videosFUNCTIONS
function getDigit(num: number, index: number): number {
  // get the ith digit from right side
  for (let i = 0; i < index; i++) {
    num = Math.trunc(num / 10);
  }
  return num % 10;
}

function countDigits(num: number): number {
  let count = 0;
  while (num != 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

function getMaxDigits(nums: number[]): number {
  let maxDigits = countDigits(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(nums[i]));
  }
  return maxDigits;
}
