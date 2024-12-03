const path = require('path')
const fs = require('fs')
const process = require('process')

const days = []

async function loadScriptsFromDir(dir) {
  const items = fs.readdirSync(dir)

  items.map(async item => {
    const fullPath = path.join(dir, item)

    if (fs.statSync(fullPath).isDirectory()) {
      await loadScriptsFromDir(fullPath)
    } else if (item === 'index.js') {
      const result = await require('./' + fullPath)

      days.push(result)
    }
  })
}

async function run() {
  const day = process.argv[2] ?? ''

  if (day === '') {
    console.log('[I] Running without parameters')
    console.log('[I] Available parameters: ')

    console.group()
    console.log('[>] specific day: node index day-1')
    console.groupEnd()
  }

  await loadScriptsFromDir(`./src/${day}`)
  try {
    const results = await Promise.all(days.map(item => item()))

    const resultsObject = results.reduce((acc, result, index) => {
      acc[`Day ${index + 1}`] = result
      return acc
    }, {})

    console.table(resultsObject)
  } catch (err) {
    console.error('Error processing files:', err)
  }
}

run()
