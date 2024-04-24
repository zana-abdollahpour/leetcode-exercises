function cartesianProduct<T>(...allEntries: T[][]): T[][] {
  return allEntries.reduce<T[][]>(
    (results, entries) =>
      results
        .map((result) => entries.map((entry) => [...result, entry]))
        .reduce((subResults, result) => [...subResults, ...result], []),
    [[]]
  );
}
const result = cartesianProduct([1, 2, 3, 4], [4, 5, 6], [7, 8, 9], [31, 32]);

console.log(result);
