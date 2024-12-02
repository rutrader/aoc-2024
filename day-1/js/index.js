const solution = require("./solution");
const readFile = require('../../utils/readFile')

readFile('input', 'day-1')
  .then((lines) => {
    console.log(
	  	solution.part1(lines),
		  solution.part2(lines)
    );
  })