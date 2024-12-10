const {arraySum} = require('../../../utils')

let operators = []

function findMatchingExpressions(input) {
  const [target, numbersPart] = input.split(': ')
  const targetValue = parseInt(target, 10)
  const numbers = numbersPart.split(' ').map(Number)

  const evaluateExpression = (nums, ops) => {
    let result = nums[0]
    for (let i = 0; i < ops.length; i++) {
      if (ops[i] === '+') {
        result += nums[i + 1]
      } else if (ops[i] === '*') {
        result *= nums[i + 1]
      } else if (ops[i] === '||') {
        result = parseInt(`${result}${numbers[i + 1]}`, 10)
      }
    }
    return result
  }

  const generateCombinations = (currentOps, index) => {
    if (index === numbers.length - 1) {
      const result = evaluateExpression(numbers, currentOps)
      if (result === targetValue) {
        results.push(
          numbers[0] + ' ' + currentOps.map((op, i) => op + ' ' + numbers[i + 1]).join(' ')
        )
      }
      return
    }

    for (let op of operators) {
      currentOps.push(op)
      generateCombinations(currentOps, index + 1)
      currentOps.pop()
    }
  }

  const results = []
  generateCombinations([], 0)

  return results.length > 0 ? target : 0
}

function part1(lines) {
  operators.push('+', '*')

  const result = lines
    .map(line => {
      return findMatchingExpressions(line)
    })
    .filter(item => item)

  return arraySum(result)
}

function part2(lines) {
  operators.push('+', '*', '||')

  const result = lines
    .map(line => {
      return findMatchingExpressions(line)
    })
    .filter(item => item)

  return arraySum(result)
}

module.exports = {
  part1,
  part2,
}
