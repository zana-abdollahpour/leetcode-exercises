/* function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  const enum divisibleBy {
    three = "Fizz",
    five = "Buzz",
    both = "FizzBuzz",
  }

  for (let i = 1; i <= n; i++) {
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) answer.push(divisibleBy.both);
    else if (isDivisibleBy3) answer.push(divisibleBy.three);
    else if (isDivisibleBy5) answer.push(divisibleBy.five);
    else answer.push(i.toString());
  }

  return answer;
} */
