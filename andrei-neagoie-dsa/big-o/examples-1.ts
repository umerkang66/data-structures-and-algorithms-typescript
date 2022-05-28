const fishColony = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10000000).fill('nemo');

type FindTarget = (array: string[], target: string) => number;

/**
 * Runs in Big O Notation of O(n) or in Linear Time
 */
const findTarget: FindTarget = (array, target) => {
  let foundTarget = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      foundTarget = i;
      break;
    }
  }

  return foundTarget;
};

const foundIndex = findTarget(large, 'nemo');
console.log(foundIndex);

/**
 * This function runs in O(1) or constant time complexity.
 */
const logFirstTwoBoxes = (boxes: number[]): void => {
  // When it comes to constant time, we don't care about the nitty gritty of O(1), or O(2), and so on, we just considered it as constant, and round it down to O(1)
  console.log(boxes[0]);
  console.log(boxes[1]);
};

const boxes = [0, 1, 2, 3, 4, 5];
logFirstTwoBoxes(boxes);

/**
 * This function has big O(n)
 */
function printMultipleThings(items: number[]): void {
  // All of the of big O(1) will be ignored
  console.log(items[0]);
  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // All of the of big O(100) will be ignored
  for (let i = 0; i <= 100; i++) {
    console.log('Hi');
  }
}

/**
 * This function has big O(a + b)
 */
function compressBoxesTwice(boxes: number[], boxes2: number[]): void {
  boxes.forEach(box => {
    console.log(box);
  });

  boxes2.forEach(box2 => {
    console.log(box2);
  });
}

/**
 * This function has big O(n^2)
 */
function logPairs<T>(boxes: T[]): T[][] {
  const pairs: T[][] = [];

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      pairs.push([boxes[i], boxes[j]]);
    }
  }

  return pairs;
}

console.log(logPairs<string>(['a', 'b', 'c', 'd', 'e', 'f']));
