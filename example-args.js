// Stores all arguments passed into the program
var argv = require('yargs').argv;

// The _ stands for an array that takes arguments via the terminal
var command = argv._[0];

console.log(argv);

// Checks if a name exists
if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('hello world');
};