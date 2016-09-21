// Writing the file 

var fs = require('fs');
fs.writeFile('message.txt', 'This is both written and read !!!', function (err) {
	if (err) {
		throw err;
	}
	console.log('Writing is done');
});

// Reading the file

/*var path = require('path');
fs.readFile(path.join(_dirname, 'message.txt'), {encoding: 'utf-8'}, function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
});*/