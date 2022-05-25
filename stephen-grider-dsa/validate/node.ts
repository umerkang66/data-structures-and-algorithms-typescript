export class Node<T> {
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
}
