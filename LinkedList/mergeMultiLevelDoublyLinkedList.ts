class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;
  public prev: ListNode<T> | null;
  public child: ListNode<T> | null;

  constructor(value: T, child: ListNode<T>) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.child = child;
  }
}

const mergeMultiLevelDoubLyLinkedList = (
  head: ListNode<number> | null
): ListNode<number> | null => {
  if (!head) return head;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.child === null) {
      // @ts-ignore
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next) tail = tail.next;

      tail.next = currentNode.next;
      if (currentNode.next) currentNode.next.prev = tail;

      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};
