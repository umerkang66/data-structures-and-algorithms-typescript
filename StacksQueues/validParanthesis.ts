const parenthesisStr = '[{[()]}]';

interface Parens {
  [key: string]: string;
}

const parens: Parens = { '(': ')', '{': '}', '[': ']' };

const validParenthesis = (str: string): boolean => {
  if (str.length === 0) return true;
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (parens[str[i]]) stack.push(str[i]);
    else {
      const leftBracket = stack.pop();
      let rightBracket: string = '';
      if (leftBracket) rightBracket = parens[leftBracket];
      if (str[i] !== rightBracket) return false;
    }
  }

  return stack.length === 0;
};

validParenthesis(parenthesisStr);
