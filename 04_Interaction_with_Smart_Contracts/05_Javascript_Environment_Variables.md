
# Interacting with Solidity from JavaScript

This guide covers the basics of setting up a JavaScript environment for interacting with Solidity smart contracts and managing environment variables securely.

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Creating and Compiling a Solidity Contract](#creating-and-compiling-a-solidity-contract)
4. [Deploying the Contract](#deploying-the-contract)
5. [Interacting with the Contract](#interacting-with-the-contract)
6. [Environment Variables](#environment-variables)
7. [Conclusion](#conclusion)

## Introduction

Interacting with Solidity smart contracts from a JavaScript environment allows developers to build full-fledged decentralized applications (DApps). Libraries such as Web3.js and Ethers.js facilitate this interaction. Additionally, using environment variables is a best practice for managing sensitive data such as private keys and API keys.

## Setting Up the Environment

### Prerequisites

- Node.js and npm installed on your system.
- A local Ethereum node (e.g., Ganache) or access to a public Ethereum node.

### Installing Dependencies

Create a new directory for your project and initialize a Node.js project:

```bash
mkdir MyDapp
cd MyDapp
npm init -y
```

Install the required dependencies:

```bash
npm install ethers dotenv
```

## Creating and Compiling a Solidity Contract

Create a Solidity contract named `SimpleStorage.sol` in a `contracts` directory:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
```

Compile the contract using a tool like `solc` (Solidity compiler) or a framework like Truffle or Hardhat.

### Using Hardhat to Compile

Install Hardhat:

```bash
npm install --save-dev hardhat
```

Initialize Hardhat:

```bash
npx hardhat
```

Choose "Create a basic sample project" and follow the instructions. Place your Solidity contract in the `contracts` directory and run:

```bash
npx hardhat compile
```

## Deploying the Contract

Create a deployment script in the `scripts` directory, for example, `deploy.js`:

```javascript
const { ethers } = require("hardhat");

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();

  console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Interacting with the Contract

Create a new file named `interact.js`:

```javascript
require('dotenv').config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.LOCALHOST_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function set(uint256 x)",
  "function get() view returns (uint256)"
];

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function main() {
  const tx = await contract.set(42);
  await tx.wait();
  console.log("Transaction Hash:", tx.hash);

  const value = await contract.get();
  console.log("Stored Value:", value.toString());
}

main().catch((error) => {
  console.error(error);
});
```

## Environment Variables

Environment variables are used to manage sensitive information securely. 

### Using `dotenv` Package

Create a `.env` file in your project root:

```plaintext
LOCALHOST_URL=http://127.0.0.1:8545
PRIVATE_KEY=your-private-key-here
```

Load these variables in your JavaScript code using the `dotenv` package:

```javascript
require('dotenv').config();
```

### Example of `.env` File

```plaintext
LOCALHOST_URL=http://127.0.0.1:8545
PRIVATE_KEY=0xYOURPRIVATEKEY
```

### Using Environment Variables in Code

Access the variables using `process.env`:

```javascript
const provider = new ethers.providers.JsonRpcProvider(process.env.LOCALHOST_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
```

## Conclusion

This guide covers the basics of setting up a JavaScript environment to interact with Solidity smart contracts, deploying a contract, and managing environment variables securely. Ethers.js and `dotenv` are powerful tools that help in building and managing secure DApps.
