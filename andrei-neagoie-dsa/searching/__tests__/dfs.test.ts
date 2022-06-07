import { BinarySearchTree } from '../bfs-dfs';

let tree: BinarySearchTree<number>;

beforeEach(() => {
  tree = new BinarySearchTree<number>(9);
  tree.insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);
});

test('depth-first-searched in-order', () => {
  expect(tree.DFSInOrder()).toEqual([1, 4, 6, 9, 15, 20, 170]);
});

test('depth-first-searched pre-order', () => {
  expect(tree.DFSPreOrder()).toEqual([9, 4, 1, 6, 20, 15, 170]);
});

test('depth-first-searched post-order', () => {
  expect(tree.DFSPostOrder()).toEqual([1, 6, 4, 15, 170, 20, 9]);
});
