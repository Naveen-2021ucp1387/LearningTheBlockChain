# Solidity Smart Contract Examples

## Introduction to Solidity

Solidity is a programming language for writing smart contracts that run on Ethereum and other blockchain platforms. Smart contracts are self-executing contracts with the terms of the agreement directly written into code.

Below are some basic examples of smart contracts in Solidity, complete with comments and explanations.

## Example : Hello World Contract

This is a simple contract that stores and retrieves a greeting message.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Define a new contract named HelloWorld
contract HelloWorld {
    // Declare a variable to store the greeting message
    string public greeting;

    // Constructor function to initialize the greeting message
    constructor() {
        greeting = "Hello, World!";
    }

    // Function to get the greeting message
    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    // Function to set a new greeting message
    function setGreeting(string memory newGreeting) public {
        greeting = newGreeting;
    }
}
