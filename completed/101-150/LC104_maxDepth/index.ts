class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0;

  function dive(node: TreeNode | null, currentDepth: number) {
    if (!node) {
      maxDepth = Math.max(currentDepth - 1, maxDepth);
      return;
    }

    dive(node.left, currentDepth + 1);
    dive(node.right, currentDepth + 1);
  }

  dive(root, 1);

  return maxDepth;
}

module.exports = maxDepth;
