const decimalToBinary = (decimal: number, binary: string): string => {
  if (decimal === 0) return binary;
  binary = (decimal % 2) + binary;

  return decimalToBinary(Math.floor(decimal / 2), binary);
};

console.log(decimalToBinary(25, ''));
