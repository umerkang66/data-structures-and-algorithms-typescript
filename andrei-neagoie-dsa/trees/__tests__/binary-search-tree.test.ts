import { BinarySearchTree } from '../binary-search-tree';

test('can insert elements in bst correctly', () => {
  const tree = new BinarySearchTree<number>(6);
  tree.insert(9).insert(4).insert(3).insert(5).insert(8).insert(10);
  const root = tree.getRoot();

  expect(root?.value).toBe(6);
  expect(root?.left?.value).toBe(4);

  expect(root?.left?.left?.value).toBe(3);
  expect(root?.left?.left?.left).toBeNull();
  expect(root?.left?.left?.right).toBeNull();

  expect(root?.left?.right?.value).toBe(5);
  expect(root?.left?.right?.left).toBeNull();
  expect(root?.left?.right?.right).toBeNull();

  expect(root?.right?.value).toBe(9);

  expect(root?.right?.left?.value).toBe(8);
  expect(root?.right?.left?.left).toBeNull();
  expect(root?.right?.left?.right).toBeNull();

  expect(root?.right?.right?.value).toBe(10);
  expect(root?.right?.right?.left).toBeNull();
  expect(root?.right?.right?.right).toBeNull();

  expect(tree.insert(11)).toBe(tree);
});

test('can lookup correctly in bst', () => {
  const tree = new BinarySearchTree<number>(6);
  tree.insert(9).insert(4).insert(3).insert(5).insert(8).insert(10);

  expect(tree.lookup(6)?.value).toBe(6);
  expect(tree.lookup(9)?.value).toBe(9);
  expect(tree.lookup(4)?.value).toBe(4);
  expect(tree.lookup(3)?.value).toBe(3);
  expect(tree.lookup(5)?.value).toBe(5);
  expect(tree.lookup(8)?.value).toBe(8);
  expect(tree.lookup(10)?.value).toBe(10);
  expect(tree.lookup(11)).toBeNull();

  expect(tree.lookup2(6)?.value).toBe(6);
  expect(tree.lookup2(9)?.value).toBe(9);
  expect(tree.lookup2(4)?.value).toBe(4);
  expect(tree.lookup2(3)?.value).toBe(3);
  expect(tree.lookup2(5)?.value).toBe(5);
  expect(tree.lookup2(8)?.value).toBe(8);
  expect(tree.lookup2(10)?.value).toBe(10);
  expect(tree.lookup2(11)).toBeNull();
});

test('can delete items from bst', () => {
  const tree = new BinarySearchTree<number>(6);
  tree.insert(9).insert(4).insert(3).insert(5).insert(8).insert(10);

  expect(tree.remove(11)).toBeNull();
  expect(tree.remove(6)?.value).toBe(6);
  expect(tree.remove(9)?.value).toBe(9);
  expect(tree.remove(4)?.value).toBe(4);
  expect(tree.remove(3)?.value).toBe(3);
  expect(tree.remove(5)?.value).toBe(5);
  expect(tree.remove(8)?.value).toBe(8);
  expect(tree.remove(10)?.value).toBe(10);
});
