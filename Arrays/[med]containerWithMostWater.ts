const arr = [4, 8, 1, 10, 3, 9];
// maxArea = min(pointerLeft, pointerRight) * (pointerRightIndex - pointerLeftIndex)

// Brute force solution O(n^2)
const containerWithMostWaterBF = function (arr: number[]): number {
  if (arr.length <= 2) return 0;
  let maxArea = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const height = Math.min(arr[i], arr[j]);
      const width = j - i;
      const area = width * height;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

containerWithMostWaterBF(arr);

// O(n) solution using a technique SHIFTING POINTERS
const containerWithMostWater = (heights: number[]): number => {
  let pointerLeft = 0;
  let pointerRight = heights.length - 1;
  let maxArea = 0;

  while (pointerLeft < pointerRight) {
    const height = Math.min(heights[pointerLeft], heights[pointerRight]);
    const width = pointerRight - pointerLeft;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[pointerLeft] <= heights[pointerRight]) pointerLeft++;
    else pointerRight--;
  }

  return maxArea;
};

containerWithMostWater(arr);
