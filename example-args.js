// Stores all arguments passed into the program
var argv = require('yargs').argv;

console.log(argv);

// The _ stands for an array that takes arguments via the terminal
// Checks teh first argument after node example-args.js   in this case "hello"
if (argv._[0] === 'hello') {
	console.log("hello world")
}