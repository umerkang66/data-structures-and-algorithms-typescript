export class Node<T extends number | string> {
  public left: Node<T> | null = null;
  public right: Node<T> | null = null;
  constructor(public data: T) {}

  public insert(data: T) {
    let root: Node<T> | null = this;
    while (true) {
      if (data < root.data) {
        if (root && root.left) root = root.left;

        if (!root.left) break;
      } else if (data > root.data) {
        if (root && root.right) root = root.right;

        if (!root.right) break;
      }
    }

    const newNode = new Node<T>(data);

    if (data < root.data) root.left = newNode;
    else if (data > root.data) root.right = newNode;
  }

  // not work
  public insertRecursive(data: T, root: Node<T> | null = this): void {
    if (root && (root.left || root.right)) {
      if (data < root.data && !root.left) {
        const newNode = new Node<T>(data);
        root.left = newNode;
      } else if (data > root.data && !root.right) {
        const newNode = new Node<T>(data);
        root.right = newNode;
      }
    }

    if (root && data < root.data) {
      this.insertRecursive(data, root.left);
      return;
    }

    if (root && data > root.data) {
      this.insertRecursive(data, root.right);
      return;
    }
  }

  public insertRecursive2(data: T, root: Node<T> | null = this): void {
    if (root && data < root.data && root.left) {
      root.left.insert(data);
    } else if (root && data < root.data && !root.left) {
      root.left = new Node<T>(data);
    } else if (root && data > root.data && root.right) {
      root.right.insert(data);
    } else if (root && data > root.data && !root.right) {
      root.right = new Node<T>(data);
    }
  }

  public contains(data: T, root: Node<T> | null = this): Node<T> | null {
    if (!root) {
      return null;
    }

    if (data < root.data) {
      return this.contains(data, root.left);
    } else if (data > root.data) {
      return this.contains(data, root.right);
    } else {
      return root;
    }
  }
}
