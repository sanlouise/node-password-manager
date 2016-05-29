var crypto = require('crypto-js');

var secretMessage = 'I hid the snacks.';
var secretKey = '123abc';


// Encrypt message
// AES is an encryption method. Encrypt takes two arguments.
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log('This is the encrypted message: ' + encryptedMessage);

// Decrypt message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);

var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('This is the decrypted message: ' + decryptedMessage);
