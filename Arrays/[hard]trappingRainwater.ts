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
const trapRainWater = function (nums: number[]): number {
  const heights = [...nums];
  let pointerL = 0;
  let pointerR = heights.length - 1;
  let maxL = 0;
  let maxR = 0;
  let total = 0;

  while (pointerL < pointerR) {
    if (heights[pointerL] <= heights[pointerR]) {
      if (heights[pointerL] >= maxL) maxL = heights[pointerL];
      else total += maxL - heights[pointerL];
      pointerL++;
    } else {
      if (heights[pointerR] >= maxR) maxR = heights[pointerR];
      else total += maxR - heights[pointerR];
      pointerR--;
    }
  }

  return total;
};

trapRainWater(nums);
