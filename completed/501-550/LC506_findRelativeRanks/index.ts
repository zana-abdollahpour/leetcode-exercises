function findRelativeRanks(score: number[]): string[] {
  const sortedScores = [...score].sort((a, b) => b - a);
  const scoresMap: Map<number, string> = new Map();

  const topRanks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  sortedScores.forEach((score, index) => {
    const rank = index <= 2 ? topRanks[index] : String(index + 1);
    scoresMap.set(score, rank);
  });

  return score.map((curScore) => scoresMap.get(curScore)!);
}
