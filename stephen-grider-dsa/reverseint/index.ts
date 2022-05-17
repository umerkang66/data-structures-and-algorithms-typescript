export function reverseInt(n: number): number {
  const nStr = n.toString();
  let reversed = '';
  for (const char of nStr) if (char !== '-') reversed = char + reversed;

  // if number is negative, Math.sign returns -1, otherwise 1
  return Math.sign(n) * +reversed;
}

export function reverseInt2(n: number): number {
  const reversed = n.toString().split('').reverse().join('');

  // parseInt will remove "-" from the end
  return parseInt(reversed) * Math.sign(n);
}

export function reverseInt3(x: number): number {
  let revNum = 0;
  let lastDigit = 0;

  while (x !== 0) {
    lastDigit = x % 10;
    console.log(lastDigit);
    x = Math.trunc(x / 10);
    revNum = revNum * 10 + lastDigit;
  }

  return revNum;
}
