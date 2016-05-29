console.log('Starting password manager');

// Include node persist
var storage = require('node-persist');
storage.initSync();

// Stores all arguments passed into the program
var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {

		return yargs.options({
			name: {
				//To make our program easier to run, shorter to type.
				alias: 'n',
				description: 'Account name (for example, Facebook or Instagram.',
				//Ensure that the field is a string, possible to check for length
				type: 'string'	
			}, 
			username: {
				alias: 'u',
				description: 'Please enter a username.',
				type: 'string'
			 },
			 	password: {
				alias: 'p',
				description: 'Please enter a password.',
				type: 'string'
			 }
		// Make account name, username and password required params
		}).demand(['n', 'u', 'p']);
	})

	.command('get', 'retrieve an existing account', function (yargs) {
		return yargs.options({
			name: {
				//To make our program easier to run, shorter to type.
				alias: 'n',
				description: 'Account name (for example, Facebook or Instagram.',
				//Ensure that the field is a string, possible to check for length
				type: 'string'	
			}

		}).demand(['n']);
	})


	// Global help function
	.help('help')
	.argv;

var command = argv._[0];


// This function allows for new account creation.
function createAccount (account) {
	var accounts = storage.getItemSync('accounts')

	// If it exists, it will return an object.
	// If it does not exist, it will return 'undefined'.
	if (typeof accounts === 'undefined' ) {

		// Set accounts to an empty array if no objects exist.
		accounts = [];
	}

	// New account is pushed to the array of accounts.
	accounts.push(account);
	// Save the new account to the accounts array.
	storage.setItemSync('accounts', accounts);
	return account;
}

// This function retrieves accounts.
function getAccount (accountName) {

	var accounts = storage.getItemSync('accounts')
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

if (command === 'create') {

	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	});
	console.log('Account created!');
	console.log(createdAccount);

} else if (command === 'get') {

	var fetchedAccount = getAccount(argv.name);

	if (typeof fetchedAccount === 'undefined') {
		console.log('No account matching this username was found.');
	} else {

		console.log('Account found!');
		console.log(fetchedAccount);
	}
}