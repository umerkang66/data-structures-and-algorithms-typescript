const sumOfNumbers = (num: number): number => {
  if (num === 0) return num;
  return num + sumOfNumbers(num - 1);
};

console.log(sumOfNumbers(10));
