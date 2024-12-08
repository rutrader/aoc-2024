const path = require('path')
const fs = require('fs/promises')

parseFile = async filename => {
  try {
    const filePath = path.join(__dirname, '../', filename)
    const content = await fs.readFile(filePath, {encoding: 'utf-8'})

    const lines = content.trim().split('\n')

    return lines
  } catch (err) {
    console.error('Error reading file:', err)
    throw err
  }
}

findSymbolPosition = (grid, symbol) => {
  for (let row = 0; row < grid.length; row++) {
    const col = grid[row].indexOf(symbol)
    if (col !== -1) {
      return {line: row, symbolKey: col}
    }
  }
  return null
}

const move = (line, symbolKey, direction) => {
  switch (direction) {
    case '^':
      return {line: line - 1, symbolKey}
    case '>':
      return {line, symbolKey: symbolKey + 1}
    case 'v':
      return {line: line + 1, symbolKey}
    case '<':
      return {line, symbolKey: symbolKey - 1}
    default:
      return {line, symbolKey}
  }
}

const getBorders = lines => {
  return {
    height: lines.length - 1,
    width: lines[0].length,
  }
}

module.exports = {parseFile, findSymbolPosition, move, getBorders}
