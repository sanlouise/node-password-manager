// Stores all arguments passed into the program
var argv = require('yargs')
	.command('hello', 'Greets the user', function (yargs) {

		return yargs.options({
			name: {
				//To make our program easier to run, shorter to type.
				alias: 'n',
				description: 'Please enter your first name.',
				//Ensure that the field is a string, possible to check for length
				type: 'string'	
			}, 
			lastname: {
				alias: 'l',
				description: 'Please enter your last name.',
				type: 'string'
			 }
			// Help for this individual function
		}).help('help');
	})

	// Global help function
	.help('help')
	// Make name and lastname required params
	.demand(['n', 'l'])
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