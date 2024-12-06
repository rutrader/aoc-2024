const path = require('path')
const fs = require('fs/promises')

parseFile = async filename => {
  try {
    const filePath = path.join(__dirname, '../', filename)
    const content = await fs.readFile(filePath, {encoding: 'utf-8'})

    const lines = content.trim().split('\n')

    const array1 = []
    const array2 = []

    lines.forEach(line => {
      if (line.includes('|')) {
        array1.push(line)
      } else if (line.includes(',')) {
        array2.push(line)
      }
    })

    return [array1, array2]
    // return lines
  } catch (err) {
    console.error('Error reading file:', err)
    throw err
  }
}

checkSequences = (validPairs, sequences, returnValid = true) => {
  const results = []

  sequences.forEach((sequence, i) => {
    let isValid = true
    for (let j = 0; j < sequence.length - 1; j++) {
      const pair = `${sequence[j]}|${sequence[j + 1]}`
      if (!validPairs.has(pair)) {
        isValid = false
        break
      }
    }

    if (isValid === returnValid) {
      results.push(sequence)
    }
  })

  return results
}

const sumupMiddleNumbers = data => {
  return data.reduce((sum, sequence) => {
    const middleIndex = Math.floor(sequence.length / 2)
    const middleElement = sequence[middleIndex]
    // console.log(`Middle element of ${sequence} is ${middleElement}`);
    return sum + middleElement
  }, 0)
}

module.exports = {parseFile, checkSequences, sumupMiddleNumbers}
