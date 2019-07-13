const web3 = require("./meterifiedWeb3");
const { writePrivateKey } = require("./utils");

// account creation
const account = web3.eth.accounts.create();

const { privateKey, address } = account;

// write out private key for later reference
writePrivateKey(privateKey);

console.log(`Successfully created account with address:${address}`);
