// Stores all arguments passed into the program
var argv = require('yargs')
	.command('hello', 'Greets the user', function(yargs) {

		return yargs.options({
			name: {
				// Make name a required parameter
				demand: true
			}
		});
	})

	.argv;
// The _ stands for an array that takes arguments via the terminal
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('hello world');
};