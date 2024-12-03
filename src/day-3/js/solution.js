const { sumArrayElements } = require('./utils')

function part1(lines) {
	const regex = /mul\(\d+,\d+\)/g;
	const matches = lines.match(regex);
	const total = matches.reduce(sumArrayElements, 0);

	return total
}

function part2(lines) {

	const regex = /mul\(\d+,\d+\)|don't\(\)|do\(\)/g;
	let enabled = true;

	const parts = lines.match(regex)
		.filter(item => {
			if (item === "don't()") {
				enabled = false;
				return false;
			} else if (item === "do()") {
				enabled = true;
				return false;
			} else {
				return enabled;
			}
		});

	const total = parts.reduce(sumArrayElements, 0);

	return total
}

module.exports = {
	part1,
	part2
  }