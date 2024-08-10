function minimumPerimeter(neededApples: number): number {
  let total = 0;
  let radius = 0;

  while (total < neededApples) {
    radius += 1;
    total += 12 * radius ** 2;
  }
  return 8 * radius;
}

console.log(minimumPerimeter(13));
