import { Node } from './node';

export function validate(root: Node<number> | null): boolean {
  const traverse = (
    node: Node<number> | null,
    min: number,
    max: number
  ): boolean => {
    if (!node) return true;

    if (node.data <= min) return false;
    if (node.data >= max) return false;

    return (
      traverse(node.left, min, node.data) &&
      traverse(node.right, node.data, max)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
