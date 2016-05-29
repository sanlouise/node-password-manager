var crypto = require('crypto-js');
var secretMessage = {
	name: 'Sandra',
	secretName: 'San'
}
var secretKey = '123abc'


var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('This is the encrypted message: ' + encryptedMessage);

// Decrypt message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('This is the decrypted message: ' + decryptedMessage);



