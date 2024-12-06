const {checkSequences, sumupMiddleNumbers} = require('./utils')

function part1(lines) {
  const [pairsBlock, sequencesBlock] = lines
  const validPairs = new Set(pairsBlock)
  const sequences = sequencesBlock.map(seq => seq.split(',').map(Number))

  const results = checkSequences(validPairs, sequences)

  return sumupMiddleNumbers(results)
}

function part2(lines) {
  const [pairsBlock, sequencesBlock] = lines
  const validPairs = new Set(pairsBlock)
  const sequences = sequencesBlock.map(seq => seq.split(',').map(Number))

  const results = checkSequences(validPairs, sequences, false)
  let result

  do {
    result = fixSequencesRecursion(results)
  } while (result.updated)

  function fixSequencesRecursion(data) {
    let updated = false
    const updatedResult = [...data]

    data.forEach((sequence, i) => {
      for (let j = 0; j < sequence.length - 1; j++) {
        const pair = `${sequence[j]}|${sequence[j + 1]}`
        if (!validPairs.has(pair)) {
          const reversedPair = `${sequence[j + 1]}|${sequence[j]}`

          if (!validPairs.has(reversedPair)) {
            isValid = false
            break
          } else {
            const current = sequence[j]
            const next = sequence[j + 1]

            updatedResult[i][j] = next
            updatedResult[i][j + 1] = current

            updated = true
          }
        }
      }
    })

    return {updated, updatedResult}
  }

  return sumupMiddleNumbers(results)
}

module.exports = {
  part1,
  part2,
}
