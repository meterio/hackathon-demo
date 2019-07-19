const web3 = require("./meterifiedWeb3");
const solc = require("solc");
const {
  readContractCode,
  readPrivateKey,
  writeAbiDefinition,
  writeContractAddress
} = require("./utils");

// read private key from file
const privateKey = readPrivateKey();

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const { address } = account;
web3.eth.accounts.wallet.add(privateKey);

const code = readContractCode();
const compiledCode = solc.compile(code);
console.log(compiledCode);
const contractName = "SAMPLEToken";
console.log("Contract compiled");

const token_abiDefinition = JSON.parse(
  compiledCode.contracts[`:${contractName}`].interface
);
writeAbiDefinition(JSON.stringify(token_abiDefinition));
const token_byteCode =
  "0x" + compiledCode.contracts[`:${contractName}`].bytecode;

contractInstance = new web3.eth.Contract(token_abiDefinition);
contractInstance.options.data = token_byteCode;
contractInstance
  .deploy({
    arguments: [address, "1000000000", "Sample Token", "3", "SAMPLE_TOKEN"]
  })
  .send({ from: address, gas: 4700000 })
  .then(newContractInstance => {
    const contractAddr = newContractInstance.options.address;
    writeContractAddress(contractAddr);
    console.log(`Successfully deployed contract to: ${contractAddr}`);
  });
