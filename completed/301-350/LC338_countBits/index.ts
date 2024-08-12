// function countBits(n: number): number[] {
//   const ans: number[] = [];

//   for (let i = 0; i <= n; i++) {
//     const binary = i.toString(2);
//     const numOnes = binary
//       .split("")
//       .reduce((acc, bit) => (Number(bit) === 1 ? acc + Number(bit) : acc), 0);
//     ans.push(numOnes);
//   }

//   return ans;
// }

function countBits(n: number): number[] {
  // n represents the non-zero number that an array should go up to
  // and n+1 is the length of the ans array that should be returned
  // so first create new array based on that info and use 0 as placeholder/default value
  let ans: number[] = new Array(n + 1).fill(0);
  // next, we need to remember what our "offset" value is
  // this is base 2 number place that we are on
  // we start at 1 because we know that 0 will be 0
  let offset: number = 1;
  // start at 1 because we know that 0 is 0
  for (let i = 1; i < n + 1; i++) {
    // check if we need to update our offset by multiplying by 2
    // this means that we've hit the next benchmark number place (0,1,2,4,8,16,32,etc.)
    if (offset * 2 === i) {
      offset = i;
    }
    // we re-assign the placeholder 0 to whatever the amount of 1s
    // we add 1 here because, after 0, there will always be at least one 1
    // we refer back to our previous ans array to see how many 1s the previous number-offset has and can then add 1 to that answer
    ans[i] = 1 + ans[i - offset];
  }
  return ans;
}
