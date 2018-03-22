var openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp
var sleep = require('sleep');
 
//openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path
 
openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)

generateKey = function() {
	var options = {
	    userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
	    numBits: 4096,                                            // RSA key size
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
console.log("encrypt...");
var pubkey = "-----BEGIN PGP PUBLIC KEY BLOCK-----" + "\n"
+ "Version: OpenPGP.js v2.5.13" + "\n"
+ "Comment: https://openpgpjs.org" + "\n"
+ "" + "\n"
+ "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" + "\n"
+ "=peff" + "\n"
+ "-----END PGP PUBLIC KEY BLOCK-----" + "\n";

	var privkey = "-----BEGIN PGP PRIVATE KEY BLOCK-----" + "\n"
+ "Version: OpenPGP.js v2.5.13" + "\n"
+ "Comment: https://openpgpjs.org" + "\n"
+ "" + "\n"
+ "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" + "\n"
+ "pD4dOKJy0qLotqMX/Q==" + "\n"
+ "=5tLw" + "\n"
+ "-----END PGP PRIVATE KEY BLOCK-----" + "\n"
+ "" + "\n";

var options, encrypted;
 
options = {
    data: new Uint8Array([0x01, 0x01, 0x01]), // input as Uint8Array (or String)
    passwords: ['secret stuff'],              // multiple passwords possible
    armor: false                              // don't ASCII armor (for Uint8Array output)
};
 
openpgp.encrypt(options).then(function(ciphertext) {
	console.log("in encrypt");
    encrypted = ciphertext.message.packets.write(); // get raw encrypted packets as Uint8Array
	console.log(encrypted);

	options = {
    message: openpgp.message.read(encrypted), // parse encrypted bytes
    password: 'secret stuff',                 // decrypt with password
    format: 'binary'                          // output as Uint8Array
};
 
openpgp.decrypt(options).then(function(plaintext) {
	console.log("in decrypt");
	console.log(plaintext.data);
    return plaintext.data // Uint8Array([0x01, 0x01, 0x01])
});
});
	
}



encrypt() 
console.log("sleep");
sleep.msleep(10000);

