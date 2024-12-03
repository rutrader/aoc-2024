const path = require('path')
const fs = require('fs/promises')

module.exports = readFile = async filename => {
  const filePath = path.join(__dirname, '../', filename)

  try {
    const content = await fs.readFile(filePath, {encoding: 'utf-8'})

    const column1 = []
    const column2 = []

    content.split('\n').forEach(line => {
      if (line.trim()) {
        const [col1, col2] = line.trim().split(/\s+/)
        column1.push(Number(col1))
        column2.push(Number(col2))
      }
    })

    return {column1, column2}
  } catch (err) {
    console.error('Error reading file:', err)
    throw err
  }
}
