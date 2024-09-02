function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (!duration) return 0;
  let totalPoison = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const startPoison = timeSeries[i];
    const endPoison = timeSeries[i] + duration - 1;
    const nextPoison = timeSeries[i + 1];

    if (!nextPoison) totalPoison += endPoison - startPoison + 1;
    else if (endPoison < nextPoison) totalPoison += endPoison - startPoison + 1;
    else totalPoison += Math.abs(startPoison - nextPoison);
  }

  return totalPoison;
}

function findPoisonedDuration2(timeSeries: number[], duration: number): number {
  let totalTime = duration;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const diff = timeSeries[i + 1] - timeSeries[i];
    if (diff > duration) totalTime += duration;
    else totalTime += diff;
  }

  return totalTime;
}

function findPoisonedDuration3(timeSeries: number[], duration: number): number {
  let result: number = duration;
  for (let i = 1; i < timeSeries.length; i++)
    result += Math.min(timeSeries[i] - timeSeries[i - 1], duration);

  return result;
}
