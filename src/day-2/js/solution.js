const isInRange = line => {
  return line.every((level, index) => {
    if (index === 0) {
      return true
    }

    const diff = Math.abs(level - line[index - 1])
    return diff >= 1 && diff <= 3
  })
}

const isOneWayArray = line => {
  const increasing = line.every((level, index) => index === 0 || level > line[index - 1])

  const decreasing = line.every((level, index) => index === 0 || level < line[index - 1])
  return increasing || decreasing
}

function isSafe(data) {
  return isInRange(data) && isOneWayArray(data)
}

function isTrulySafe(array) {
  return isSafe(array) || canBeMadeSafe(array)
}

function canBeMadeSafe(line) {
  for (let i = 0; i < line.length; i++) {
    const modifiedArray = [...line.slice(0, i), ...line.slice(i + 1)]

    if (isSafe(modifiedArray)) {
      return true
    }
  }
  return false
}

function part1(lines) {
  return lines.filter(isSafe).length
}

function part2(lines) {
  return lines.filter(isTrulySafe).length
}

module.exports = {
  part1,
  part2,
}
