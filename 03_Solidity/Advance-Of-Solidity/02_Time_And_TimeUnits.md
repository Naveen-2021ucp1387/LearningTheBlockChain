
# Time and Time Units in Solidity

## Introduction

Solidity, a statically-typed language for Ethereum smart contracts, includes several built-in units to handle time. These units are essential for tasks like setting time limits, creating time-based conditions, and scheduling actions.

## Time Units

Solidity provides built-in time units to work with `uint` values representing time. The time units are:

- `seconds`
- `minutes`
- `hours`
- `days`
- `weeks`

Each time unit corresponds to a specific number of seconds.

### Time Unit Conversion

Here is a quick reference for how each unit converts to seconds:

- `1 seconds` = 1 second
- `1 minutes` = 60 seconds
- `1 hours` = 3600 seconds
- `1 days` = 86400 seconds
- `1 weeks` = 604800 seconds

### Example

Using time units in Solidity is straightforward. Here's an example to demonstrate how to use them:

```solidity
pragma solidity ^0.8.0;

contract TimeUnitsExample {
    uint public oneMinute = 1 minutes;
    uint public oneHour = 1 hours;
    uint public oneDay = 1 days;
    uint public oneWeek = 1 weeks;

    function getTimeUnits() public view returns (uint, uint, uint, uint) {
        return (oneMinute, oneHour, oneDay, oneWeek);
    }
}
```

In this contract, `oneMinute`, `oneHour`, `oneDay`, and `oneWeek` are converted to their equivalent values in seconds.

## Working with Block Timestamps

Solidity provides the `block.timestamp` property, which returns the current block timestamp in seconds since the Unix epoch. This can be used in conjunction with time units for various operations.

### Example

Here's an example demonstrating the use of `block.timestamp`:

```solidity
pragma solidity ^0.8.0;

contract BlockTimestampExample {
    uint public creationTime;

    constructor() {
        creationTime = block.timestamp;
    }

    function timeSinceCreation() public view returns (uint) {
        return block.timestamp - creationTime;
    }
}
```

In this example, `creationTime` stores the block timestamp when the contract is deployed. The `timeSinceCreation` function calculates the time elapsed since the contract's deployment.

## Time-Based Conditions

Time units and `block.timestamp` can be used to create time-based conditions in smart contracts. These are useful for functionalities like locking funds, creating time-limited offers, or scheduling tasks.

### Example

Below is an example of a time-locked wallet:

```solidity
pragma solidity ^0.8.0;

contract TimeLockedWallet {
    address public owner;
    uint public unlockTime;

    constructor(uint _unlockTime) {
        owner = msg.sender;
        unlockTime = _unlockTime;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyAfterUnlock() {
        require(block.timestamp >= unlockTime, "Wallet is locked");
        _;
    }

    function withdraw() public onlyOwner onlyAfterUnlock {
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {}

    function getTimeRemaining() public view returns (uint) {
        if (block.timestamp >= unlockTime) {
            return 0;
        }
        return unlockTime - block.timestamp;
    }
}
```

In this contract, funds can be withdrawn only after the specified `unlockTime`. The `onlyAfterUnlock` modifier ensures that the `withdraw` function can be called only after the lock period has passed.

## Conclusion

Time units in Solidity provide a convenient way to handle time-based operations in smart contracts. By using these units along with the `block.timestamp` property, developers can implement a wide range of time-sensitive functionalities efficiently and securely.
