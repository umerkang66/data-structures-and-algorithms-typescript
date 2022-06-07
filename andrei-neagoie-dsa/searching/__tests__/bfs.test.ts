import { BinarySearchTree } from '../breadth-first-search';

test('can correctly return breath-first-searched answer', () => {
  const tree = new BinarySearchTree<number>(9);
  tree.insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);

  expect(tree.breathFirstSearch()).toEqual([9, 4, 20, 1, 6, 15, 170]);
});

test('can correctly return breath-first-searched answer recursively', () => {
  const tree = new BinarySearchTree<number>(9);
  tree.insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);

  expect(tree.breathFirstSearchRecursive()).toEqual([9, 4, 20, 1, 6, 15, 170]);
});
