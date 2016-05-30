
var crypto = require('crypto-js');
var storage = require('node-persist');

storage.initSync();
var accounts = [];

// Stores all arguments passed into the program
var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {

		return yargs.options({
			name: {
				//To make our program easier to run, shorter to type.
				alias: 'n',
				description: 'Account name (for example, Facebook or Instagram)',
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
			 },
			 // To add a user to our accounts array, one needs the master password
			 	masterPassword: {
				alias: 'm',
				description: 'Please enter a master password.',
				type: 'string'
			}
		// Make account name, username, password and master password required params
		}).demand(['n', 'u', 'p', 'm']);
	})

	.command('get', 'Retrieve an existing account', function (yargs) {
		return yargs.options({
			name: {
				//To make our program easier to run, shorter to type.
				alias: 'n',
				description: 'Account name (for example, Facebook or Instagram)',
				//Ensure that the field is a string, possible to check for length
				type: 'string'	
			},
			// To retrieve a user from our accounts array, one needs the master password
			 	masterPassword: {
				alias: 'm',
				description: 'Please enter a master password.',
				type: 'string'
			}

		}).demand(['n', 'm']);
	})

	// Global help function
	.help('help')
	.argv;

var command = argv._[0];

// Both getAccounts and saveAccounts functions are to get rid of redundant code in the createAccount and getAccount functions.
function getAccounts (masterPassword) {
	// Fetch accounts
	var encryptedAccount = storage.getItemSync('accounts');
	// Initially assumes that the accounts array is empty
	var accounts = [];
	// Decrypt and check whether accounts exist
	if (typeof encryptedAccount !== 'undefined') {
		//Decrypt
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		try {
			accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
		} catch (e) {
			// We don't need to do anything. The master password was incorrect, so we leave the accounts variable as an empty array.
		}
	} 
	return accounts;
}

function saveAccounts (account, masterPassword) {
	var encryptedAccount = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	storage.setItemSync('accounts', encryptedAccount.toString());
	return accounts;
}


// This function allows for new account creation.
function createAccount (account, masterPassword) {
	//Moved the details of encryption into a seperate function.
	accounts = getAccounts(masterPassword);
	// New account is pushed to the array of accounts.
	accounts.push(account);
	// Save the new account to the accounts array.
	saveAccounts(accounts, masterPassword);
	return account;
}

// This function retrieves accounts.
function getAccount (accountName, masterPassword) {
	//Moved the details of encryption into a seperate function.
	var accounts = getAccounts(masterPassword);
	var matchedAccount;
	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

if (command === 'create') {
	try {

		var createdAccount = createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		}, argv.masterPassword);
		console.log('Account created!');
		console.log(createdAccount);
	} catch (e) {
		console.log('Could not create this account!');
	}

} else if (command === 'get') {
	try {
		var fetchedAccount = getAccount(argv.name, argv.masterPassword);
		if (typeof fetchedAccount === 'undefined') {
			console.log('No account matching this username was found.');
		} else {
			console.log('Account found!');
			console.log(fetchedAccount);
		}
	} catch (e) {
		console.log('Could not retrieve this account!');
	}
}