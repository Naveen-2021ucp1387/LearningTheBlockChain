# Understanding ERC-20 Tokens
<p align="center"> NOTE : Proper notes for solidty will shared in upcoming file for know just go through the given examples

</p>
## What are ERC-20 Tokens?

ERC-20 tokens are a type of cryptocurrency built on the Ethereum blockchain. They adhere to a specific standard that allows them to be used in a consistent way across different applications and platforms. Each ERC-20 token is fungible, meaning every token is identical in type and value to another token. This is similar to how one US dollar is equivalent to another in value and usability.

## Table of Contents
- [ERC-20 Tokens Overview](#erc-20-tokens-overview)
- [The ERC-20 Standard](#the-erc-20-standard)
- [Interacting with ERC-20 Tokens](#interacting-with-erc-20-tokens)
- [Creating ERC-20 Tokens](#creating-erc-20-tokens)
- [Use Cases and Varieties of ERC-20 Tokens](#use-cases-and-varieties-of-erc-20-tokens)
- [ERC-20 Token Standard Adoption Across EVM-Compatible Networks](#erc-20-token-standard-adoption-across-evm-compatible-networks)

## ERC-20 Tokens Overview

ERC-20 tokens are fungible digital tokens on the Ethereum network. "Fungible" means each token is indistinguishable from others of its kind. For example, one token of ABC is the same as another token of ABC in both function and value. Different sets of tokens are identified by unique ticker symbols like ABC or XYZ. The ease of creating ERC-20 tokens has led to thousands of different tokens, though not all have significant value.

## The ERC-20 Standard

ERC-20 is a technical standard used for smart contracts on the Ethereum blockchain for implementing tokens. The standard defines a set of rules that all ERC-20 tokens must follow. These rules include how tokens are transferred, how transactions are approved, and the total supply of tokens. The standard was introduced in 2015 through an Ethereum Improvement Proposal (EIP-20).

## Interacting with ERC-20 Tokens

To interact with ERC-20 tokens, you need Ether (ETH) to pay for transaction fees. For example, sending 100 ABC tokens to someone requires a small amount of ETH to cover the transaction cost.

## Creating ERC-20 Tokens

ERC-20 tokens are created using smart contracts. These contracts define the rules and functions of the tokens. For example, a contract might be set up to issue new tokens in exchange for ETH, similar to an initial public offering of stocks.

### Example Smart Contract for Creating ERC-20 Tokens

Here’s an example of a simple ERC-20 token contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** uint256(decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from], "Insufficient balance");
        require(_value <= allowance[_from][msg.sender], "Allowance exceeded");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
