function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let numPossible = 0;
  for (let i = 0; i < flowerbed.length; i++)
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      numPossible++;
    }

  return n <= numPossible;
}
