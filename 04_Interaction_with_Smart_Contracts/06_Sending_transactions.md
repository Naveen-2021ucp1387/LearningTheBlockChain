
# Sending Transactions on Ethereum with JavaScript

This guide covers the basics of sending transactions on the Ethereum blockchain using JavaScript. It includes setting up the environment, creating and deploying a smart contract, and sending transactions to interact with the contract.

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Creating and Compiling a Solidity Contract](#creating-and-compiling-a-solidity-contract)
4. [Deploying the Contract](#deploying-the-contract)
5. [Sending Transactions](#sending-transactions)
6. [Example: Interacting with the Contract](#example-interacting-with-the-contract)
7. [Handling Errors](#handling-errors)
8. [Conclusion](#conclusion)

## Introduction

Transactions are essential operations on the Ethereum blockchain, allowing users to transfer Ether, call smart contract functions, and update states. This guide will show you how to send transactions using the `ethers.js` library in JavaScript.

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

    event DataStored(uint256 data);

    function set(uint256 x) public {
        storedData = x;
        emit DataStored(x);
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

## Sending Transactions

### Setting Up the Transaction Environment

Create a new file named `sendTransaction.js`:

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
```

### Creating a Transaction

To send a transaction to set a value in the `SimpleStorage` contract:

```javascript
async function sendTransaction() {
  const tx = await contract.set(42);
  await tx.wait();
  console.log("Transaction Hash:", tx.hash);
}

sendTransaction().catch((error) => {
  console.error(error);
});
```

### Transaction Structure

A transaction object can contain the following fields:

- `to`: The address of the recipient (in this case, the smart contract address).
- `value`: The amount of Ether to send.
- `gasLimit`: The maximum amount of gas to use for the transaction.
- `gasPrice`: The price per unit of gas.
- `nonce`: The transaction count of the sender's address.
- `data`: The data to send with the transaction (e.g., encoded function call).

### Example Transaction Object

```javascript
const tx = {
  to: contractAddress,
  value: ethers.utils.parseEther("0.1"),
  gasLimit: 21000,
  gasPrice: ethers.utils.parseUnits("10", "gwei"),
  nonce: await provider.getTransactionCount(wallet.address)
};
```

## Example: Interacting with the Contract

### Reading Contract State

To read the stored value from the `SimpleStorage` contract:

```javascript
async function readStoredData() {
  const value = await contract.get();
  console.log("Stored Value:", value.toString());
}

readStoredData().catch((error) => {
  console.error(error);
});
```

### Sending a Transaction and Reading State

Combining sending a transaction and reading the updated state:

```javascript
async function main() {
  // Send a transaction to set the value
  const tx = await contract.set(42);
  await tx.wait();
  console.log("Transaction Hash:", tx.hash);

  // Read the updated value
  const value = await contract.get();
  console.log("Stored Value:", value.toString());
}

main().catch((error) => {
  console.error(error);
});
```

## Handling Errors

Proper error handling is essential for debugging and ensuring the reliability of your application.

### Example Error Handling

```javascript
async function sendTransaction() {
  try {
    const tx = await contract.set(42);
    await tx.wait();
    console.log("Transaction Hash:", tx.hash);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

sendTransaction();
```

## Conclusion

Sending transactions is a core feature of interacting with the Ethereum blockchain. Using `ethers.js`, developers can easily send transactions, interact with smart contracts, and manage blockchain states. Proper error handling and understanding transaction structure are crucial for building robust decentralized applications.

For more detailed information, refer to the [Ethers.js documentation](https://docs.ethers.io/v5/).
