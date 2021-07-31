const isPalindromeRecursive = (str: string): boolean => {
  const length = str.length;
  if (length === 0 || length === 1) return true;

  if (str.charAt(0) === str.charAt(length - 1))
    return isPalindromeRecursive(str.substr(1, length - 2));

  return false;
};

console.log(isPalindromeRecursive('kayak'));
