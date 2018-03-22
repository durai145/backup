var openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp
var sleep = require('sleep');
 
//openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path
 
openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)

generateKey = function() {
	var options = {
	    userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
	    numBits: 1024,                                            // RSA key size
	    passphrase: 'super long and hard to guess secret'         // protects the private key
	};
	 
	openpgp.generateKey(options).then(function(key) {
	    var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
	    var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
		console.log(privkey);
		console.log(pubkey);
	});
}

encrypt = function() {
var pubkey = "-----BEGIN PGP PUBLIC KEY BLOCK-----" + "\n"
+ "Version: OpenPGP.js v2.5.13" + "\n"
+ "Comment: https://openpgpjs.org" + "\n"
+ "" + "\n"
+ "xo0EWg0iwAED/0qASipdIaDa4+HanncEJ7ty19v/qWakN4m/bKee5FYvGa8e" + "\n"
+ "r7nW9Rv2g+9M2ppmlIg8X4SZ5n3oRXgJ6sm91T9Ir+VcqV6YoLQuxZ9CmxL/" + "\n"
+ "uqa+hH9dI9ZTl059wR791auIu+wOMQ7x38LOj3Nouu08dqQLT71ZytEd/DjV" + "\n"
+ "9vklABEBAAHNG0pvbiBTbWl0aCA8am9uQGV4YW1wbGUuY29tPsK1BBABCAAp" + "\n"
+ "BQJaDSLBBgsJBwgDAgkQk9HU/Yy7ICMEFQgKAgMWAgECGQECGwMCHgEAANEZ" + "\n"
+ "A/45rq2pIdTCZwUOTK1ElSR+NZZ+3C8pnNCQvU6peRYBycdatSrspsiCdRKJ" + "\n"
+ "XUITu6MMCFrn2w8EzlhZk24IZQ8WzOZhcNbqRRwgAC3AjYX/qzuhmmtcze2F" + "\n"
+ "mdRlfxzfDrChyvSEx0xjpZ5RHCTYPF7wUJg6kyHeSGCOZFBjl6Iw7c6NBFoN" + "\n"
+ "IsEBBAChaMQWCqLMox9YJ0UiDLCvmjwclzkMtTrytC1U+OAIKrLmAKzJ2whc" + "\n"
+ "jFcSOLL6CvDEqr9M2J4PMdrCD9yTTho2isYFdr5xCXMD8q84Qb2NVNR/qt1U" + "\n"
+ "LUIzfz3YmGNkFmHEGwwbuFpAkD/VY6nMuOzBUGToWUX94IxxDwW9zXcRSQAR" + "\n"
+ "AQABwp8EGAEIABMFAloNIsEJEJPR1P2MuyAjAhsMAAD1HAP8DLpnHZyLwejk" + "\n"
+ "qzsg3ZLhdVrgWjC4sYCg4Tz8x/ny7Zv5VLehme7QVYji/sWQrdLJiSkh52wX" + "\n"
+ "QnENlAljylQRPjj9PmaBGNNlDSiYjXnSJsB4e9/RzxK/4VwMgrHosQkfYfQL" + "\n"
+ "tCfZgv/+rR9HTfGxUzRLSo7jUG0QRHfICnmSxi4=" + "\n"
+ "=gy0n" + "\n"
+ "-----END PGP PUBLIC KEY BLOCK-----";


	var privkey =  "-----BEGIN PGP PRIVATE KEY BLOCK-----" + "\n"
+ "Version: OpenPGP.js v2.5.13" + "\n"
+ "Comment: https://openpgpjs.org" + "\n"
+ "" + "\n"
+ "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" + "\n"
+ "TfGxUzRLSo7jUG0QRHfICnmSxi4=" + "\n"
+ "=PkTD" + "\n"
+ "-----END PGP PRIVATE KEY BLOCK-----";

var passphrase='super long and hard to guess secret' ;

var options, encrypted;
var privKeyObj = openpgp.key.readArmored(privkey).keys[0];
privKeyObj.decrypt(passphrase);
 
options = {
    data: 'Hello, World!',                             // input as String (or Uint8Array)
    publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
     privateKeys: privKeyObj // for signing (optional)
};

openpgp.encrypt(options).then(function(ciphertext) {
    encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
	console.log(encrypted);
	

	options = {
	    message: openpgp.message.readArmored(encrypted),     // parse armored message
	    publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
	    privateKey: privKeyObj // for decryption
	};

	openpgp.decrypt(options).then(function(plaintext) {
		console.log(plaintext);
	    return plaintext.data; // 'Hello, World!'
	});
});
}



encrypt() 
console.log("sleep");

