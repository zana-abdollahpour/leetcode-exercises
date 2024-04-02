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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let sameTree = true;

  function checkSameNode(p: TreeNode | null, q: TreeNode | null) {
    if (!p && !q) return;
    else if (!p || !q) {
      sameTree = false;
      return;
    } else if (p.val !== q.val) {
      sameTree = false;
      return;
    }

    checkSameNode(p.left, q.left);
    checkSameNode(p.right, q.right);
  }

  checkSameNode(p, q);
  return sameTree;
}

module.exports = isSameTree;
