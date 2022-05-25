export class Node<T> {
  public children: Node<T>[] = [];
  constructor(public data: T) {}

  public add(data: T): Node<T> {
    this.children.push(new Node(data));
    return this;
  }
}
