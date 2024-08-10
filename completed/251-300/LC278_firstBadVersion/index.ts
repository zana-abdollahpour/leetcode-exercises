/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1,
      right = n,
      res = 1;

    while (right >= left) {
      const mid = Math.floor((right + left) / 2);
      if (!isBadVersion(mid)) {
        // right side
        if (isBadVersion(mid + 1)) {
          // check is that the one
          return (res = mid + 1);
        }
        left = mid + 1;
      } else {
        // left side
        right = mid - 1;
      }
    }
    return res;
  };
};
