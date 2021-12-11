const factorialRecursive = (num: number): number => {
  if (!num || num <= 2) return num;
  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));
