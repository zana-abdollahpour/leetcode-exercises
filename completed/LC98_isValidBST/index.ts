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

function isValidBST(root: TreeNode | null): boolean {
  let validity = true;

  function helper(
    node: TreeNode | null,
    min: number | null,
    max: number | null
  ) {
    if (!node) return;
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      validity = false;
      return;
    }

    helper(node.left, min, node.val);
    helper(node.right, node.val, max);
  }

  helper(root, null, null);

  return validity;
}
module.exports = isValidBST;
