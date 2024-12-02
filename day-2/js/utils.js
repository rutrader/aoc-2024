const path = require("path");
const fs = require('fs/promises');


module.exports = parseFile = async (filename, day) => {
	try {
		const filePath = path.join(__dirname, "../", filename);
		const content = await fs.readFile(filePath, { encoding: 'utf-8' });
		
		const rows = content
			.split('\n')
			.filter(line => line.trim())
			.map(line =>
				line.trim().split(/\s+/).map(Number)
			);
  
		return rows;
	} catch (err) {
		console.error('Error reading file:', err);
		throw err;
	}
  }