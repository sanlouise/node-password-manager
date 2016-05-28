console.log('Starting password manager');

// Include node persist
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('name', 'Sandra'); //Sets the item and stores it

var name = storage.getItemSync('name'); // This should retrieve the stored data
console.log('Saved name is: ' + name); // This should show up in the terminal

