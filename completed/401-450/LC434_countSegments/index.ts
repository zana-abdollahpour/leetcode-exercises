function countSegments(s: string): number {
  const arr: string[] = s.split(" ");
  let count: number = 0;
  for (const elem of arr) if (elem) count++;

  return count;
}
