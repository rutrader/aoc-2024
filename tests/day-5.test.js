const solution = require('../src/day-5/js/solution')
const {parseFile} = require('../src/day-5/js/utils')

describe('AOC 2024: Day 5', () => {
  let lines = []

  beforeEach(async () => {
    lines = await parseFile('input', 'day-5')
  })

  test('Part 1', async () => {
    const result = solution.part1(lines)
    expect(result).toBe(5509)
  })

  test('Part 2', async () => {
    const result = solution.part2(lines)
    expect(result).toBe(4407)
  })
})
