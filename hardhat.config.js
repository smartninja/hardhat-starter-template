require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// get vars from .env
const { 
  VERIFY_API_KEY, 
  DEPLOYER_PRIVATE_KEY 
} = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    development: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
      accounts: [DEPLOYER_PRIVATE_KEY],
      gas: "auto",
      gasPrice: 1 * 10**9
    }
  },

  etherscan: { apiKey: VERIFY_API_KEY },
};
