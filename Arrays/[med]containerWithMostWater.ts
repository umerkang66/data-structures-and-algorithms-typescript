const arr = [4, 8, 1, 10, 3, 9];

// Brute force solution O(n^2)
const mostWaterBF = function (arr: number[]): number {
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

mostWaterBF(arr);

// O(n) solution using a technique SHIFTING POINTERS
const mostWater = function (arr: number[]) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let maxArea = 0;

  while (pointer1 < pointer2) {
    const height = Math.min(arr[pointer1], arr[pointer2]);
    const width = pointer2 - pointer1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (arr[pointer1] <= arr[pointer2]) pointer1++;
    else pointer2--;
  }

  return maxArea;
};

mostWater(arr);
