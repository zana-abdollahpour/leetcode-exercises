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

function invertTree(root: TreeNode | null): TreeNode | null {
  function helper(node: TreeNode) {
    if (!node) return;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  }

  if (root) helper(root);
  return root;
}

module.exports = invertTree;
