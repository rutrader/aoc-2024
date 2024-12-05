const solution = require('../src/day-4/js/solution')
const {parseFile} = require('../src/day-4/js/utils')

describe('AOC 2024: Day 4', () => {
  let lines = []

  beforeEach(async () => {
    lines = await parseFile('input', 'day-4')
  })

  test('Part 1', async () => {
    const result = solution.part1(lines)
    expect(result).toBe(2530)
  })

  test('Part 2', async () => {
    const result = solution.part2(lines)
    expect(result).toBe(1921)
  })
})
