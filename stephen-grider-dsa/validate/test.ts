import { Node } from './node';
import { validate } from './index';

test('Validate recognizes a valid BST', () => {
  const n = new Node<number>(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node<number>(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  if (n.left && n.left.left) n.left.left.right = new Node<number>(999);

  expect(validate(n)).toEqual(false);
});
