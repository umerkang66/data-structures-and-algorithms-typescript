import { Node } from './node';

export function validate(
  node: Node<number> | null,
  min: number | null = null,
  max: number | null = null
): boolean {
  if (!node) {
    return true;
  }

  if ((max !== null && node.data > max) || (min !== null && node.data < min)) {
    return false;
  }

  const leftResult = validate(node.left, min, node.data);
  const rightResult = validate(node.right, node.data, max);

  return leftResult && rightResult;
}
