# ERC-721 Token

<p align="center"> NOTE : Proper notes for solidty will shared in upcoming file for know just go through the given examples

</p>

## What is ERC-721?

ERC-721 is a standard for "non-fungible" tokens (NFTs) on the Ethereum blockchain. Unlike fungible tokens (like cryptocurrencies), which are identical and can be exchanged on a one-to-one basis, non-fungible tokens are unique and cannot be exchanged on a like-for-like basis.

### Key Characteristics:

- **Uniqueness**: Each ERC-721 token has unique metadata and a unique identifier.
- **Ownership**: Each token is linked to an owner and cannot be duplicated.
- **Compatibility**: Being a widely used standard, ERC-721 tokens are compatible with various applications and platforms.

## Who Invented ERC-721?

ERC-721 was proposed by Dieter Shirley in January 2018 as an Ethereum Improvement Proposal (EIP). It was the first NFT standard on Ethereum and laid the foundation for many NFT applications we see today.

## What’s Special About ERC-721?

The uniqueness of ERC-721 tokens makes them ideal for representing ownership of unique assets like digital collectibles, real estate, or event tickets. Each token's distinct value and metadata distinguish it from other tokens.

## How are ERC-721 NFTs Produced?

ERC-721 tokens are created through smart contracts written in a programming language like Solidity. These contracts define the unique properties and behaviors of the tokens. A typical ERC-721 contract includes functions to mint, transfer, and manage tokens.

<p align="center">
<img src="../Images/NFTs.png" width="500">
</p>

## Functions in ERC-721:

- **name()**: Returns the name of the token.
- **symbol()**: Returns the token's symbol.
- **tokenURI()**: Returns the metadata URL for a given token ID.
- **balanceOf()**: Returns the number of tokens owned by an address.
- **ownerOf()**: Returns the owner of a specific token.
- **safeTransferFrom()**: Safely transfers ownership of a token.
- **transferFrom()**: Transfers ownership of a token.
- **approve()**: Approves another address to transfer a token.
- **setApprovalForAll()**: Approves or removes an operator for the caller.
- **getApproved()**: Returns the approved address for a token.
- **isApprovedForAll()**: Checks if an operator is approved for a given owner.
- **supportsInterface()**: Checks if a contract implements an interface.

## What Can You Do with ERC-721 NFTs?

ERC-721 tokens can represent both tangible and intangible items. Common use cases include:

- **Digital Art and Collectibles**: Unique digital artworks and collectibles.
- **Gaming**: In-game items like characters, weapons, and land.
- **Music**: Unique music tracks and albums.
- **Event Ticketing**: Unique tickets for events.
- **Healthcare**: Secure storage and transfer of medical data.

## Examples of Popular ERC-721 Tokens:

- **CryptoKitties**: A game where players can buy, sell, and breed virtual cats.
- **Sorare**: A fantasy football game with collectible player cards.
- **Ethereum Name Service (ENS)**: Unique, human-readable domain names on Ethereum.
- **Bored Ape Yacht Club**: A collection of unique digital ape avatars.

## Example of ERC-721 Token Contract

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.6 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title A contract for demonstrating ERC-721 Token
/// @notice This contract shows how to create an ERC-721 Token
contract GFGToken is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenCountCounter;

    constructor() ERC721("GFGToken", "GFG") {}

    function safeMint(string memory _uri) public onlyOwner {
        uint256 tokenCount = _tokenCountCounter.current();
        _tokenCountCounter.increment();
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _uri);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenCount, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenCount, batchSize);
    }

    function _burn(uint256 tokenCount) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenCount);
    }

    function tokenURI(uint256 tokenCount) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenCount);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
```
