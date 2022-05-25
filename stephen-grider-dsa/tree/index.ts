export class Node<T> {
  public children: Node<T>[] = [];
  constructor(public data: T) {}

  public add(data: T): Node<T> {
    this.children.push(new Node(data));
    return this;
  }

  public remove(data: T): Node<T> {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });

    return this;
  }
}

export class Tree<T> {
  // manually add root node after creating tree and node
  public root: Node<T> | null = null;

  public bfs(callback: (node: Node<T>) => void) {
    const childrenToProcess: Node<T>[] = [];

    if (this.root) childrenToProcess.push(this.root);

    while (childrenToProcess.length) {
      const firstNode = childrenToProcess.shift();
      if (firstNode) {
        // if firstNode has children, pass it to the end of array
        childrenToProcess.push(...firstNode.children);
        callback(firstNode);
      }
    }
  }

  public dfs(callback: (node: Node<T>) => void) {
    const childrenToProcess: Node<T>[] = [];

    if (this.root) childrenToProcess.push(this.root);

    while (childrenToProcess.length) {
      const firstNode = childrenToProcess.shift();
      if (firstNode) {
        // if firstNode has children, pass it to the start of array
        childrenToProcess.unshift(...firstNode.children);
        callback(firstNode);
      }
    }
  }
}
