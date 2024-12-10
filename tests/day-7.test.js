const solution = require('../src/day-7/js/solution')
const {parseFile} = require('../src/day-7/js/utils')

describe('AOC 2024: Day 7', () => {
  let lines = []

  beforeEach(async () => {
    lines = await parseFile('demo', 'day-7')
  })

  test('Part 1', async () => {
    const result = solution.part1(lines)
    // demo data for GH actions
    expect(result).toBe(3749)
    // expect(result).toBe(975671981569)
  })

  test('Part 2', async () => {
    const result = solution.part2(lines)
    // demo data for GH actions
    expect(result).toBe(11387)
    // expect(result).toBe(223472064194845)
  })
})
