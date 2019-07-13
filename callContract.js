const web3 = require("./meterifiedWeb3");
const {
  readPrivateKey,
  readContractAddress,
  readAbiDefinition
} = require("./utils");

const privateKey = readPrivateKey();
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const { address } = account;
web3.eth.accounts.wallet.add(privateKey);

const contractAddr = readContractAddress();
const abiDefinition = readAbiDefinition();
contractInstance = new web3.eth.Contract(abiDefinition);
contractInstance.options.address = contractAddr;

// notice these calls are executed asynchronously
contractInstance.methods
  .mintToken(address, "99999999999999999999999")
  .send({ from: address, gas: 4700000 })
  .then(function(data) {
    console.log("mintToken result:", data);
  })
  .catch(function(err) {
    console.log("mintToken error:", err);
  });

contractInstance.methods
  ._transferFrom(address, "0x6db04d51beb19b644df783b458db7633b9f90d8b", "9999")
  .send({ from: address, gas: 4700000 })
  .then(function(data) {
    console.log("_transferFrom result:", data);
  })
  .catch(function(err) {
    console.log("_transferFrom error:", err);
  });

contractInstance.methods
  .getAccountBalanceOf(address)
  .send({ from: address, gas: 4700000 })
  .then(function(data) {
    console.log("getAccountBalanceOf result:", data);
  })
  .catch(function(err) {
    console.log("getAccountBalanceOf error:", err);
  });

contractInstance.methods
  .getAccountBalanceOf(address)
  .call({ from: address, gas: 4700000 })
  .then(function(data) {
    console.log("getAccountBalanceOf result:", data);
  })
  .catch(function(err) {
    console.log("getAccountBalanceOf error:", err);
  });
