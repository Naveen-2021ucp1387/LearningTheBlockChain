
# Conditionals in Solidity

## Introduction

Conditionals in Solidity allow you to execute different code based on certain conditions. They are a fundamental aspect of programming that enables decision-making in smart contracts. Solidity supports several types of conditional statements, including `if`, `else if`, `else`, and the ternary operator.

## `if` Statement

The `if` statement is used to execute a block of code if a specified condition is true.

### Syntax

```solidity
if (condition) {
    // code to be executed if condition is true
}
```

### Example

```solidity
pragma solidity ^0.8.0;

contract IfExample {
    function checkNumber(uint256 number) public pure returns (string memory) {
        if (number > 100) {
            return "Number is greater than 100";
        }
    }
}
```

In this example, the function `checkNumber` returns a message if the input `number` is greater than 100.

## `if-else` Statement

The `if-else` statement is used to execute one block of code if a condition is true and another block if the condition is false.

### Syntax

```solidity
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
```

### Example

```solidity
pragma solidity ^0.8.0;

contract IfElseExample {
    function checkNumber(uint256 number) public pure returns (string memory) {
        if (number > 100) {
            return "Number is greater than 100";
        } else {
            return "Number is 100 or less";
        }
    }
}
```

In this example, the function `checkNumber` returns different messages based on whether the `number` is greater than 100 or not.

## `else if` Statement

The `else if` statement allows you to check multiple conditions.

### Syntax

```solidity
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}
```

### Example

```solidity
pragma solidity ^0.8.0;

contract ElseIfExample {
    function checkNumber(uint256 number) public pure returns (string memory) {
        if (number > 100) {
            return "Number is greater than 100";
        } else if (number == 100) {
            return "Number is exactly 100";
        } else {
            return "Number is less than 100";
        }
    }
}
```

In this example, the function `checkNumber` evaluates three different conditions and returns a message accordingly.

## Nested `if` Statements

You can nest `if` statements within each other to check multiple conditions.

### Example

```solidity
pragma solidity ^0.8.0;

contract NestedIfExample {
    function checkNumber(uint256 number) public pure returns (string memory) {
        if (number > 50) {
            if (number > 100) {
                return "Number is greater than 100";
            } else {
                return "Number is between 51 and 100";
            }
        } else {
            return "Number is 50 or less";
        }
    }
}
```

In this example, the function `checkNumber` uses nested `if` statements to check multiple ranges of the `number`.

## Ternary Operator

The ternary operator is a shorthand way of writing `if-else` statements. It takes three operands: a condition, a result for true, and a result for false.

### Syntax

```solidity
condition ? trueResult : falseResult;
```

### Example

```solidity
pragma solidity ^0.8.0;

contract TernaryExample {
    function checkNumber(uint256 number) public pure returns (string memory) {
        return number > 100 ? "Number is greater than 100" : "Number is 100 or less";
    }
}
```

In this example, the function `checkNumber` uses the ternary operator to return different messages based on the value of `number`.

## Practical Example: Voting System

Let's combine the concepts of conditionals into a practical example: a simple voting system.

### Example

```solidity
pragma solidity ^0.8.0;

contract Voting {
    mapping(address => uint256) public votes;
    address public winner;

    function vote(uint256 candidate) public {
        votes[msg.sender] = candidate;
    }

    function determineWinner() public {
        uint256 candidate1Votes = 0;
        uint256 candidate2Votes = 0;

        // Count votes
        for (uint256 i = 0; i < 100; i++) { // Assuming 100 voters for simplicity
            if (votes[address(i)] == 1) {
                candidate1Votes++;
            } else if (votes[address(i)] == 2) {
                candidate2Votes++;
            }
        }

        // Determine winner
        if (candidate1Votes > candidate2Votes) {
            winner = address(1);
        } else if (candidate2Votes > candidate1Votes) {
            winner = address(2);
        } else {
            winner = address(0); // It's a tie
        }
    }
}
```

In this example, we have a simple voting system where users can vote for two candidates. The `determineWinner` function counts the votes and determines the winner using conditional statements.

## Note

In Solidity, the switch statement, as found in many other programming languages, is not natively supported. However, you can achieve similar functionality using a combination of if, else if, and else statements.
The absence of a native switch statement in Solidity can be attributed to several reasons, primarily rooted in the goals and constraints of the language's design. Here are some key reasons:

#### 1. Language Simplicity and Security
Solidity is designed to be a simple and secure language for writing smart contracts. Adding more control structures like switch increases the complexity of the language, both for developers and for the compiler itself. By keeping the language simple, the chances of introducing bugs and security vulnerabilities are reduced.

#### 2. Gas Efficiency
Gas efficiency is a crucial consideration in Ethereum smart contract development. Each additional feature in the language can introduce more complexity in how the Ethereum Virtual Machine (EVM) handles and optimizes code. switch statements could potentially lead to less efficient bytecode compared to a well-optimized series of if-else statements.

#### 3. Readability and Explicitness
Solidity emphasizes explicitness in coding practices to avoid misunderstandings and ambiguities. if-else chains are more explicit and readable in the context of smart contracts, making it easier for auditors to understand the logic and for developers to reason about potential execution paths and their associated costs.

#### 4. Alternative Solutions
Solidity provides alternatives that achieve the same functionality as a switch statement, namely the if-else construct and the use of enums. These alternatives are sufficient for the majority of use cases and fit well within the existing structure and philosophy of the language.

## Conclusion

Conditionals in Solidity are powerful tools for controlling the flow of your smart contract's logic. By using `if`, `else if`, `else`, and the ternary operator, you can implement complex decision-making processes in your contracts. Understanding how to use these conditionals effectively is crucial for writing robust and efficient Solidity code.
