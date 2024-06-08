import { Queue } from '../stacks-and-queues/queue';

type BinarySearchAble = number | string;

export class BinarySearchTreeNode<T extends BinarySearchAble> {
  public left: BinarySearchTreeNode<T> | null = null;
  public right: BinarySearchTreeNode<T> | null = null;
  constructor(public value: T) {}
}

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

  // Both solutions are correct
  public lookup(value: T): BinarySearchTreeNode<T> | null {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }

    while (true) {
      if (currentNode && value < currentNode.value) {
        if (!currentNode.left) {
          // value < currVal, it tends to go to left, if left doesn't exist, value doesn't exist
          break;
        }
        currentNode = currentNode.left;
      } else if (currentNode && value > currentNode.value) {
        if (!currentNode.right) {
          // value > currVal, it tends to go to right, if right doesn't exist, value doesn't exist
          break;
        }
        currentNode = currentNode.right;
      } else {
        // value === currentNode.value
        if (currentNode) {
          return currentNode;
        }
      }
    }

    return null;
  }

  // Both solutions are correct
  public lookup2(value: T): BinarySearchTreeNode<T> | null {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (currentNode && value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode && value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        // value === currentNode.value
        if (currentNode) {
          return currentNode;
        }
      }
    }

    return null;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    if (!this.root) {
      return null;
    }

    let currentNode: BinarySearchTreeNode<T> | null = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode) {
          // value === currentNode.value
          // 1) No right child of currentNode, but left is available
          if (!currentNode.right && currentNode.left) {
            if (!parentNode) {
              this.root = currentNode.left;
            } else {
              if (currentNode.value > parentNode.value) {
                // go to the right of parent node
                parentNode.right = currentNode.left;
              }

              if (currentNode.value < parentNode.value) {
                // go to the left of parent node
                parentNode.left = currentNode.left;
              }
            }

            return currentNode;
          } else if (currentNode.right && !currentNode.right.left) {
            // 2) No left child of right of currentNode

            currentNode.right.left = currentNode.left;

            if (!parentNode) {
              this.root = currentNode.right;
            } else {
              if (currentNode.value > parentNode.value) {
                // go to the right of parent node
                parentNode.right = currentNode.right;
              }

              if (currentNode.value < parentNode.value) {
                // go to the left of parent node
                parentNode.left = currentNode.right;
              }
            }

            return currentNode;
          } else if (!currentNode.left && !currentNode.right) {
            // 3) No left or right child available
            if (!parentNode) {
              this.root = null;
            } else {
              if (currentNode.value > parentNode.value) {
                // go to the right of parent node
                parentNode.right = null;
              }

              if (currentNode.value < parentNode.value) {
                // go to the left of parent node
                parentNode.left = null;
              }
            }

            return currentNode;
          } else if (currentNode.right && currentNode.right.left) {
            // Both right is available and left of right is also available, and this left of right should be at the deleted position
            let utmostLeft = currentNode.right.left;
            let utmostLeftParent = currentNode.right;

            while (utmostLeft && utmostLeft.left) {
              utmostLeftParent = utmostLeft;
              utmostLeft = utmostLeft.left;
            }

            // there is not utmostLeft.left, because utmostLeft was on the left side of utmostLeftParent, then right side of utmostLeft should be on the left side of the utmostLeftParent
            utmostLeftParent.left = utmostLeft.right;

            utmostLeft.left = currentNode.left;
            utmostLeft.right = currentNode.right;

            if (!parentNode) {
              this.root = utmostLeft;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = utmostLeft;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = utmostLeft;
              }
            }

            return currentNode;
          }
        }
      }
    }

    return null;
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

export function traverse<T extends BinarySearchAble>(
  node: BinarySearchTreeNode<T> | null
): BinarySearchTreeNode<T> | null {
  if (!node) {
    return null;
  }
  const tree: BinarySearchTreeNode<T> = {
    value: node.value,
    left: null,
    right: null,
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
