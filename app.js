console.log('Starting password manager');

// Include node persist
var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('accounts', [{

// 	username: "Sandra",
// 	balance: 1000

// }]); //Sets the item and stores it

var accounts = storage.getItemSync('accounts'); // This should retrieve the stored data

accounts.push({
	username: 'Kelson',
	balance: 1500
});

storage.setItemSync('accounts', accounts);

console.log(accounts); // This should show up in the terminal

