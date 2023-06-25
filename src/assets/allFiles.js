const fs = require('fs');

const directoryPath = './src/assets/skillsImg'; // Replace with the actual directory path

fs.readdir(directoryPath, (err, files) => {
	if (err) {
		console.error('Error reading directory:', err);
		return;
	}

	console.log('Files in the directory:');
	files.forEach((file) => {
		console.log(file);
	});
});
