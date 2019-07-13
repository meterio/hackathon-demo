const web3 = require("./meterifiedWeb3");
const { readPrivateKey } = require("./utils");

// read private key from file
const privateKey = readPrivateKey();

// create account object from private key
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const { address } = account;

web3.eth.accounts.wallet.add(privateKey);

web3.eth
  .sendTransaction({
    from: address,
    to: "0xe637de73b39975acea42daf8efbe846ff0e52376",

    // actual meter = value * 10e-18
    value: "100000000000000000", // 0.1 MTR

    // 0000000000 for MTR(meter token)
    // 0000000001 for MTRG(meter governance token)
    data: "0000000000" // meter token
  })
  .then(() => {
    console.log("Successfully sent transaction");
  })
  .catch(err => {
    console.log("Error: ", err);
  });
