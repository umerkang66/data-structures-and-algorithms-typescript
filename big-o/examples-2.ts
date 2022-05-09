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
