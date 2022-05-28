export function reverseStr(str: string): string {
  if (!str || str.length <= 1) {
    // Either there is no string, or string has only less than or equal to one letter
    return str;
  }

  const strArr = str.split('');
  const reversedStrArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStrArr.push(strArr[i]);
  }

  return reversedStrArr.join('');
}
