import SinglyNode from './SinglyNode';
type Head = SinglyNode<number> | null;

// Brute force solution by using scaling data structure javascript set
const cycleDetectionBF = (head: Head): Head => {
  let currentNode = head;
  const seenNodes = new Set();

  while (!seenNodes.has(currentNode)) {
    if (currentNode && currentNode.next === null) return null;

    seenNodes.add(currentNode);
    if (currentNode) currentNode = currentNode.next;
  }

  return currentNode;
};

// Floyd Tortoise-Hare algorithm
const cycleDetection = (head: Head): Head => {
  let hare = head;
  let tortoise = head;

  while (true) {
    if (hare) hare = hare.next;
    if (tortoise) tortoise = tortoise.next;

    if (hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }

    if (hare === tortoise) break;
  }

  // This logic is done to get from where the cycle starts
  let pointer1 = head;
  let pointer2: Head = tortoise;

  while (pointer1 !== pointer2) {
    if (pointer1) pointer1 = pointer1.next;
    if (pointer2) pointer2 = pointer2.next;
  }

  return pointer1;
};
