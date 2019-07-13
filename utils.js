const fs = require("fs");
const PRIVATE_KEY_FILE = "private.key";
const ABI_DEF_FILE = "contract.abi";
const CONTRACT_ADDR_FILE = "contract.address";
const CONTRACT_FILE = "sample_token.sol";

module.exports = {
  writePrivateKey: content => {
    fs.writeFileSync(PRIVATE_KEY_FILE, content);
  },

  readPrivateKey: () => {
    try {
      return fs.readFileSync(PRIVATE_KEY_FILE).toString();
    } catch (e) {
      throw new Error(`Could not read ${PRIVATE_KEY_FILE}`);
    }
  },

  writeAbiDefinition: content => {
    fs.writeFileSync(ABI_DEF_FILE, content);
  },

  readAbiDefinition: () => {
    try {
      return JSON.parse(fs.readFileSync(ABI_DEF_FILE).toString());
    } catch (e) {
      throw new Error(`Could not read ${ABI_DEF_FILE}`);
    }
  },

  writeContractAddress: content => {
    fs.writeFileSync(CONTRACT_ADDR_FILE, content);
  },

  readContractAddress: () => {
    try {
      return fs.readFileSync(CONTRACT_ADDR_FILE).toString();
    } catch (e) {
      throw new Error(`Could not read ${CONTRACT_ADDR_FILE}`);
    }
  },

  readContractCode: () => {
    try {
      return fs.readFileSync(CONTRACT_FILE).toString();
    } catch (e) {
      throw new Error(`Could not read ${CONTRACT_FILE}`);
    }
  }
};
