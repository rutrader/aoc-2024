const arraySum = values => {
  return values.reduce((acc, val) => acc + parseInt(val, 10), 0)
}

module.exports = {arraySum}
