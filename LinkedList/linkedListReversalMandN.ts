import LinkedList from './LinkedList';
import SinglyNode from './SinglyNode';

const reverseBetween = (
  head: SinglyNode<number> | null,
  left: number,
  right: number
): SinglyNode<number> | null => {
  let currentPosition = 1,
    currentNode = head,
    start = head;

  while (currentPosition < left) {
    start = currentNode;
    if (currentNode) currentNode = currentNode.next;
    currentPosition++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPosition >= left && currentPosition <= right) {
    if (!currentNode) return head;
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;

    currentPosition++;
  }

  if (start) start.next = newList;
  if (tail) tail.next = currentNode;

  if (left === 1) return newList;
  return head;
};

const linkedList = new LinkedList<number>(1);
linkedList.append(2, 3, 4, 5);

reverseBetween(linkedList.getHead(), 2, 4);
