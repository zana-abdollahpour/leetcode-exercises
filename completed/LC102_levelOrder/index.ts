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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  function helper(node: TreeNode | null, depth: number) {
    if (!node) return;
    if (!res[depth]) res[depth] = [];

    res[depth].push(node.val);
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  }

  helper(root, 0);

  return res;
}

module.exports = levelOrder;
