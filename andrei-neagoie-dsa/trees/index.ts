import { BinarySearchTree, traverse } from './binary-search-tree';

const tree = new BinarySearchTree<number>(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);

console.log(traverse<number>(tree.getRoot()));
