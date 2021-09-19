class SinglyNode<T> {
  public value: T;
  public next: SinglyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default SinglyNode;
