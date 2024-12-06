const solution = require('./solution')
const {parseFile} = require('./utils')

module.exports = async () => {
  const lines = await parseFile('input', 'day-5')
  const part1Result = solution.part1(lines)
  const part2Result = solution.part2(lines)

  return {
    'Part 1': part1Result,
    'Part 2': part2Result,
  }
}
