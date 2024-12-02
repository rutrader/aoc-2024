const parseFile = require('./utils')

const solution = require("./solution");

parseFile('input', 'day-2')
  .then((lines) => {
    console.log(
	  	solution.part1(lines),
		  solution.part2(lines)
    );
  })
