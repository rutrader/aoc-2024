function part1(lines) {
  const searchWord = (x, y, dx, dy, grid, word) => {
    const rows = grid.length
    const cols = grid[0].length
    const len = word.length

    for (let i = 0; i < len; i++) {
      const nx = x + i * dx
      const ny = y + i * dy
      if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] !== word[i]) {
        return false
      }
    }
    return true
  }

  // search in all possible directions
  const findWordInGrid = (grid, word) => {
    const directions = [
      [0, 1], // right
      [0, -1], // left
      [1, 0], // up
      [-1, 0], // down
      [1, 1], // down-right
      [1, -1], // down-left
      [-1, 1], // up-right
      [-1, -1], // up-left
    ]

    const positions = []
    const rows = grid.length
    const cols = grid[0].length

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        for (const [dx, dy] of directions) {
          if (searchWord(x, y, dx, dy, grid, word)) {
            positions.push({start: [x, y], direction: [dx, dy]})
          }
        }
      }
    }
    return positions
  }

  const word = 'XMAS'
  const occurrences = findWordInGrid(lines, word)

  return occurrences.length
}

function part2(lines) {
  const results = []

  const checkWord = (grid, x, y, dx, dy, word) => {
    const rows = grid.length
    const cols = grid[0].length

    for (let i = 0; i < 3; i++) {
      const nx = x + i * dx
      const ny = y + i * dy
      if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] !== word[i]) {
        return false
      }
    }
    return true
  }

  const findAndMarkXMAS = grid => {
    const rows = grid.length
    const cols = grid[0].length

    const visualization = Array.from({length: rows}, () => Array(cols).fill('.'))

    for (let x = 1; x < rows - 1; x++) {
      for (let y = 1; y < cols - 1; y++) {
        // left-to-right diagonal && right-to-left diagonal
        const masCheck =
          (checkWord(grid, x - 1, y - 1, 1, 1, 'MAS') &&
            checkWord(grid, x - 1, y + 1, 1, -1, 'SAM')) ||
          (checkWord(grid, x - 1, y - 1, 1, 1, 'MAS') &&
            checkWord(grid, x - 1, y + 1, 1, -1, 'MAS'))
        // left-to-right diagonal && right-to-left diagonal
        const samCheck =
          (checkWord(grid, x - 1, y - 1, 1, 1, 'SAM') &&
            checkWord(grid, x - 1, y + 1, 1, -1, 'MAS')) ||
          (checkWord(grid, x - 1, y - 1, 1, 1, 'SAM') &&
            checkWord(grid, x - 1, y + 1, 1, -1, 'SAM'))
        if (masCheck || samCheck) {
          results.push([x, y])
        }
      }
    }

    return visualization.map(row => row.join(''))
  }

  findAndMarkXMAS(lines)

  return results.length
}

module.exports = {
  part1,
  part2,
}
