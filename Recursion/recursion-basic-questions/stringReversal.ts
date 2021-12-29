const reverseStrRecursive = (str: string): string => {
  if (str === '') return str;
  return reverseStrRecursive(str.substr(1)) + str.charAt(0);
};

console.log(reverseStrRecursive('umer gulzar kang'));
