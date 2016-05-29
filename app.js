console.log('Starting password manager');

// Include node persist
var storage = require('node-persist');
storage.initSync();


// Three attributes: account.name, account.username, account.password
function createAccount (account) {


	var accounts = storage.getItemSync('accounts')

	if (typeof accounts ==='undefined') {
		accounts = [];
	}

	accounts.push(account)
	storage.setItemSync('accounts', accounts);

	return account;
}

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