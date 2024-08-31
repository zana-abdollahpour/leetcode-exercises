/* function constructRectangle(area: number): number[] {
  const combinations: [number, number][] = [];
  const sqrt = Math.sqrt(area);
  if (sqrt % 1 === 0) return [sqrt, sqrt];

  for (let i = 1; i < Math.ceil(sqrt); i++)
    if (area % i === 0) combinations.push([area / i, i]);

  return combinations[combinations.length - 1];
}
 */

function constructRectangle(area: number): number[] {
  const sqrt = Math.floor(Math.sqrt(area));

  for (let i = sqrt; i >= 1; i--) if (area % i === 0) return [area / i, i];

  return [area, 1];
}
