console.log('Starting password manager');

// Include node persist
var storage = require('node-persist');
storage.initSync();


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
	var matchedAccounts;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

// createAccount({
// 	name: 'Sandra',
// 	username: 'sandra',
// 	password: 'password'

// });

var sandraAccount = getAccount('Sandra');
console.log(sandraAccount);