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

module.exports = {parseFile}
