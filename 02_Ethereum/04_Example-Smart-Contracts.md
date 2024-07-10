# Solidity Smart Contract Examples

<p align="center"> NOTE : Proper notes for solidty will shared in upcoming file for know just go through the given examples

</p>

## Introduction to Solidity

Solidity is a programming language for writing smart contracts that run on Ethereum and other blockchain platforms. Smart contracts are self-executing contracts with the terms of the agreement directly written into code.

Below are some basic examples of smart contracts in Solidity, complete with comments and explanations.

## Structure of a Smart Contract

A typical smart contract in Solidity has the following structure:

1. **Pragma Directive**: Specifies the version of Solidity compiler to be used.
2. **Contract Definition**: Defines the contract and contains state variables, functions, and optionally, constructors and events.
3. **State Variables**: Variables that hold the state of the contract.
4. **Constructor**: A special function that is executed only once when the contract is deployed.
5. **Functions**: Define the behavior of the contract. Functions can be public, private, internal, or external.
6. **Events**: Allow logging of data to the blockchain.

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
