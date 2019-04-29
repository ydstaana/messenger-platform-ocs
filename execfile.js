const { execFile } = require('child_process')

const webServer = execFile('node', ['app.js'], (error, stdout,stderr) => {
	if(error){
		throw error;
	}
	console.log(stdout);
})