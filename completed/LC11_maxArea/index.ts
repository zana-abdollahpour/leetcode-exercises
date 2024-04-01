function maxArea(height: number[]) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const curArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(curArea, maxArea);

    if (height[start] < height[end]) start++;
    else end--;
  }

  return maxArea;
}

module.exports = maxArea;
