import { Node } from './index';

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node<number>(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  if (node && node.left) expect(node.left.data).toEqual(5);

  if (node && node.right) expect(node.right.data).toEqual(15);

  if (node && node.right && node.right.right) {
    expect(node.right.right.data).toEqual(17);
  }
});

test('Node can insert recursively correctly', () => {
  const node = new Node<number>(10);
  node.insertRecursive(5);
  node.insertRecursive(15);
  node.insertRecursive(17);

  if (node && node.left) expect(node.left.data).toEqual(5);

  if (node && node.right) expect(node.right.data).toEqual(15);

  if (node && node.right && node.right.right) {
    expect(node.right.right.data).toEqual(17);
  }
});

test('Node can insert recursively correctly. this recursive function was implemented in course', () => {
  const node = new Node<number>(10);
  node.insertRecursive2(5);
  node.insertRecursive2(15);
  node.insertRecursive2(17);

  if (node && node.left) expect(node.left.data).toEqual(5);

  if (node && node.right) expect(node.right.data).toEqual(15);

  if (node && node.right && node.right.right) {
    expect(node.right.right.data).toEqual(17);
  }
});

test('Contains returns node with the same data', () => {
  const node = new Node<number>(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  if (node && node.left && node.left.left) {
    const three = node.left.left.right;
    expect(node.contains(3)).toEqual(three);
  }
});

test('Contains returns null if value not found', () => {
  const node = new Node<number>(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
