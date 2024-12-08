const solution = require('../src/day-6/js/solution')
const {parseFile} = require('../src/day-6/js/utils')

describe('AOC 2024: Day 5', () => {
  let lines = []

  beforeEach(async () => {
    lines = await parseFile('input', 'day-6')
  })

  test('Part 1', async () => {
    const result = solution.part1(lines)
    expect(result).toBe(4890)
  })

  test('Part 2', async () => {
    const result = solution.part2(lines)
    expect(result).toBe(1995)
  })
})
