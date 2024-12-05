const path = require('path')
const fs = require('fs/promises')

parseFile = async (filename, day) => {
  try {
    const filePath = path.join(__dirname, '../', filename)
    const content = await fs.readFile(filePath, {encoding: 'utf-8'})

    const rows = content.split('\n')

    return rows
  } catch (err) {
    console.error('Error reading file:', err)
    throw err
  }
}

sumArrayElements = (sum, match) => {
  const [x, y] = match.match(/\d+/g).map(Number)
  return sum + x * y
}

module.exports = {parseFile, sumArrayElements}
