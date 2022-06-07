import { Queue } from '../stacks-and-queues/queue';

type BinarySearchAble = number | string;

export class BinarySearchTreeNode<T extends BinarySearchAble> {
  public left: BinarySearchTreeNode<T> | null = null;
  public right: BinarySearchTreeNode<T> | null = null;
  constructor(public value: T) {}
}

// methods that are not required have been removed
export class BinarySearchTree<T extends BinarySearchAble> {
  private root: BinarySearchTreeNode<T> | null = null;

  constructor(value: T) {
    const newNode = new BinarySearchTreeNode<T>(value);
    this.root = newNode;
  }

  public getRoot(): BinarySearchTreeNode<T> | null {
    return this.root;
  }

  public insert(value: T): BinarySearchTree<T> {
    const newNode = new BinarySearchTreeNode(value);
    let currentNode = this.root;

    while (true) {
      if (currentNode && value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }

      if (currentNode && value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }

    return this;
  }

  public breathFirstSearch(): BinarySearchAble[] {
    const results: BinarySearchAble[] = [];
    let currentNode = this.root;

    // if we have a really wide tree, this will get really large, width of tree tells the space complexity
    let queue = new Queue<BinarySearchTreeNode<T> | null>();
    if (currentNode) queue.enqueue(currentNode);

    while (queue.peek()) {
      currentNode = queue.dequeue();
      if (currentNode) {
        results.push(currentNode.value);
        if (currentNode.left) {
          queue.enqueue(currentNode.left);
        }
        if (currentNode.right) {
          queue.enqueue(currentNode.right);
        }
      }
    }

    return results;
  }

  public breathFirstSearchRecursive(
    queue = new Queue<BinarySearchTreeNode<T> | null>().enqueue(this.root),
    results: BinarySearchAble[] = []
  ): BinarySearchAble[] {
    if (!queue.peek()) {
      return results;
    }
    const currentNode = queue.dequeue();
    if (currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
    return this.breathFirstSearchRecursive(queue, results);
  }

  // DFS, the higher the height, the more memory will be taken by recursive stack, height of tree tells the space complexity
  public DFSInOrder(
    node: BinarySearchTreeNode<T> | null = this.root,
    list: BinarySearchAble[] = []
  ): BinarySearchAble[] {
    if (node && node.left) {
      this.DFSInOrder(node.left, list);
    }
    if (node) list.push(node.value);
    if (node && node.right) {
      this.DFSInOrder(node.right, list);
    }
    return list;
  }

  public DFSPreOrder(
    node: BinarySearchTreeNode<T> | null = this.root,
    list: BinarySearchAble[] = []
  ): BinarySearchAble[] {
    if (node) list.push(node.value);
    if (node && node.left) {
      this.DFSPreOrder(node.left, list);
    }
    if (node && node.right) {
      this.DFSPreOrder(node.right, list);
    }
    return list;
  }

  public DFSPostOrder(
    node: BinarySearchTreeNode<T> | null = this.root,
    list: BinarySearchAble[] = []
  ): BinarySearchAble[] {
    if (node && node.left) {
      this.DFSPostOrder(node.left, list);
    }
    if (node && node.right) {
      this.DFSPostOrder(node.right, list);
    }
    if (node) list.push(node.value);
    return list;
  }
}

/*
DFS TRAVERSAL TYPES

          9
      4       20
    1   6   15   170

IN_ORDER: [1,4,6,9,15,20,170]
PRE_ORDER: [9,4,1,6,20,15,170] -> to recreate tree
POST_ORDER: [1,6,4,15,170,20,9]
*/
