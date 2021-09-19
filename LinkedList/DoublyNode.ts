class DoublyNode<T> {
  public value: T;
  public next: DoublyNode<T> | null;
  public previous: DoublyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export default DoublyNode;
