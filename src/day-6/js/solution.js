const {findSymbolPosition, move, getBorders} = require('./utils')

const visitedStates = new Set()

function part1(lines) {
  const borders = getBorders(lines)
  const formatted = lines.map(item => item.split(''))
  const startedPoint = findSymbolPosition(lines, '^')

  const route = loop(startedPoint, borders, formatted)
  return route.flat().filter(Boolean).length // Inline countVisited
}

const serializeState = (line, symbolKey, direction) => `${line},${symbolKey},${direction}`

function loop(startedPoint, borders, formatted) {
  const visited = Array.from({length: borders.height + 1}, () =>
    Array(borders.width + 1).fill(false)
  )

  const addPosition = (line, symbolKey) => {
    visited[line][symbolKey] = true
  }

  const isOutOfBounds = (line, symbolKey) =>
    line < 0 || line > borders.height || symbolKey < 0 || symbolKey > borders.width

  const directionMap = {'^': '>', '>': 'v', v: '<', '<': '^'}

  addPosition(startedPoint.line, startedPoint.symbolKey)

  while (
    startedPoint.line >= 0 &&
    startedPoint.line <= borders.height &&
    startedPoint.symbolKey >= 0 &&
    startedPoint.symbolKey <= borders.width
  ) {
    const direction = formatted[startedPoint.line][startedPoint.symbolKey]
    const {line: nextLine, symbolKey: nextSymbolKey} = move(
      startedPoint.line,
      startedPoint.symbolKey,
      direction
    )

    const currentState = serializeState(startedPoint.line, startedPoint.symbolKey, direction)

    if (visitedStates.has(currentState)) {
      console.log('Infinite loop detected!')
      break
    }

    visitedStates.add(currentState)

    if (isOutOfBounds(nextLine, nextSymbolKey)) break

    const nextSymbol = formatted[nextLine][nextSymbolKey]

    if (nextSymbol === '#') {
      formatted[startedPoint.line][startedPoint.symbolKey] = directionMap[direction]
    } else {
      formatted[startedPoint.line][startedPoint.symbolKey] = '.'
      startedPoint.line = nextLine
      startedPoint.symbolKey = nextSymbolKey
      formatted[startedPoint.line][startedPoint.symbolKey] = direction
      addPosition(startedPoint.line, startedPoint.symbolKey)
    }
  }

  return visited
}

function part2(lines) {
  const borders = getBorders(lines)
  const formatted = lines.map(item => item.split(''))
  const startedPoint = findSymbolPosition(lines, '^')

  // @todo: I need to create another better solution
  return 2
}

module.exports = {
  part1,
  part2,
}
