// curWater = min(max1, max2) - currentHeight
const nums = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// BRUTE FORCE SOLUTION
const trapRainWaterBF = function (nums: number[]): number {
  const heights = [...nums];
  const length = heights.length;
  let total = 0;

  for (let i = 0; i < length; i++) {
    let pointerL = i;
    let pointerR = i;
    let maxL = 0;
    let maxR = 0;

    while (pointerR < length) {
      maxR = Math.max(heights[pointerR], maxR);
      pointerR++;
    }

    while (pointerL >= 0) {
      maxL = Math.max(heights[pointerL], maxL);
      pointerL--;
    }

    const currentHeight = Math.min(maxL, maxR) - heights[i];
    if (currentHeight >= 0) total += currentHeight;
  }

  return total;
};

trapRainWaterBF(nums);

// SOLUTION WITH O(N) LINEAR TIME COMPLEXITY USING TWO POINTERS TECHNIQUE
const trappingRainWater = (heights: number[]) => {
  let pointerLeft = 0;
  let pointerRight = heights.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let total = 0;

  while (pointerLeft < pointerRight) {
    if (heights[pointerLeft] <= heights[pointerRight]) {
      if (heights[pointerLeft] > maxLeft) maxLeft = heights[pointerLeft];
      else total += maxLeft - heights[pointerLeft];

      pointerLeft++;
    } else {
      if (heights[pointerRight] > maxRight) maxRight = heights[pointerRight];
      else total += maxRight - heights[pointerRight];

      pointerRight--;
    }
  }

  return total;
};

trappingRainWater(nums);
