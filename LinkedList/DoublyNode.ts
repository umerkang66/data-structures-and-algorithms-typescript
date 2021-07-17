class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null;
  previous: DoublyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export default DoublyNode;
