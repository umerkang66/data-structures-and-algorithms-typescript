const str = 'a)b(c)d';

const minimumBracketsToRemove = (str: string) => {
  const res = str.split('');
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') stack.push(i);
    else if (res[i] === ')' && stack.length) stack.pop();
    else if (res[i] === ')') res[i] = '';
  }

  while (stack.length) {
    const curIdx = stack.pop();
    if (curIdx) res[curIdx] = '';
  }

  return res.join('');
};

minimumBracketsToRemove(str);
