const solution = require('./solution')
const readFile = require('./utils')

module.exports = async () => {
  const lines = await readFile('input', 'day-1')
  const part1Result = solution.part1(lines)
  const part2Result = solution.part2(lines)

  // Return the results as an object or an array
  return {
    'Part 1': part1Result,
    'Part 2': part2Result,
  }
}
