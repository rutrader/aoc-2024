const solution = require('../src/day-2/js/solution');
const parseFile = require('../src/day-2/js/utils')

describe('AOC 2024: Day 2', () => {
  let lines = [];

  beforeEach(async () => {
    lines = await parseFile('input', 'day-2');
  });

  test('Part 1', async () => {
    const result = solution.part1(lines);
    expect(result).toBe(472);
  })

  test('Part 2', async () => {
    const result = solution.part2(lines);
    expect(result).toBe(520)
  })
})