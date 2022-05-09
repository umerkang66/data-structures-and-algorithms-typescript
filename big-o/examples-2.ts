function printNumsAndSums(nums: number[]): void {
  console.log('Those are the numbers:');
  nums.forEach(num => {
    console.log(num);
  });

  console.log('Those are the sums:');
  nums.forEach(firstNum => {
    nums.forEach(secondNum => {
      console.log(firstNum + secondNum);
    });
  });
}

printNumsAndSums([5, 2, 8, 7]);

/**
 * This has time complex big O(n)
 * This has space complex big O(1)
 */
function logging(num: number) {
  // No data structure is used
  for (let i = 1; i <= num; i++) {
    console.log('Logging');
  }
}

logging(5);

function logInArrays(input: number) {
  const array = [];
  for (let i = 0; i < input; i++) {
    array[i] = i;
  }

  return array;
}

console.log(logInArrays(6));

/**
 * Time Complexity is big O(a+b) => big O(n)
 * Space Complexity is big O(n)
 */
function containCommonItems(arr1: string[], arr2: string[]): boolean {
  interface ArrObj {
    [key: string]: boolean;
  }

  // This will grow as the size of array will grow, hence it affects the space complexity
  const hashMap: ArrObj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!hashMap[arr1[i]]) {
      hashMap[arr1[i]] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashMap[arr2[i]]) return true;
  }

  return false;
}

console.log(containCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));

/**
 * Time Complexity is big O(a*b) => big O(n^2)
 */
function containCommonItems2(arr1: string[], arr2: string[]): boolean {
  return arr1.some(item => arr2.includes(item));
}

console.log(containCommonItems2(['a', 'b', 'c', 'x'], ['z', 'y', 'a']));
