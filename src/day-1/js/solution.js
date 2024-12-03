function part1(lines) {
  const [sortedFirstColumn, sortedSecondColumn] = Object.values(lines).map(item => item.sort())

  let sum = 0

  sortedFirstColumn.map((item, key) => {
    if (sortedSecondColumn[key]) {
      sum += Math.abs(item - sortedSecondColumn[key])
    }
  })

  return sum
}

function part2(lines) {
  const [sortedFirstColumn, sortedSecondColumn] = Object.values(lines)

  const occurrences = []

  sortedFirstColumn.forEach(item => {
    const count = sortedSecondColumn.filter(value => value === item).length
    occurrences.push(item * count)
  })

  return occurrences.reduce((sum, value) => sum + value, 0)
}

module.exports = {
  part1,
  part2,
}
