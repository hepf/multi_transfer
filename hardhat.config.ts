import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const API_KEY=process.env.API_KEY || "";

export default {
  default: 'kovan',
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/"+API_KEY,
      blockGasLimit: 8000000,
      network_id: 3,
      gas: 7300000,
      gasPrice: 20000000000,
      gasLimit: 7500000,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      confirmations: 1,
      websockets: true,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/"+API_KEY,
      blockGasLimit: 8000000,
      network_id: 3,
      gas: 7300000,
      gasPrice: 20000000000,
      gasLimit: 7500000,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      confirmations: 1,
      websockets: true,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './build/cache',
    artifacts: './build/artifacts',
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: '<api-key>',
  },
};
