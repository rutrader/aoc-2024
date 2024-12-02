const solution = require('./solution');
const readFile = require('./utils')

describe('AOC 2024: Day 1', () => {
  let lines = [];

  beforeEach(async () => {
    lines = await readFile('input', 'day-1');
  });

  test('Part 1', async () => {
    const result = solution.part1(lines);
    expect(result).toBe(1830467);
  })

  test('Part 2', async () => {
    const result = solution.part2(lines);
    expect(result).toBe(26674158)
  })
})