function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root == null) return 0;
  return countSum(root, false);
}

function countSum(root: TreeNode, left: boolean): number {
  if (!root) return 0;
  if (root.left == null && root.right == null && left) return root.val;
  return countSum(root.left, true) + countSum(root.right, false);
}
