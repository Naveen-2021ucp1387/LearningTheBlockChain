
# Maths and Arithmetic in Solidity

Solidity provides several arithmetic operations and mathematical functions that allow developers to perform calculations within smart contracts. Here is a detailed overview:

## 1. Basic Arithmetic Operations

Solidity supports the following basic arithmetic operations on integers and fixed-point numbers:

- **Addition (`+`)**: Adds two numbers.
- **Subtraction (`-`)**: Subtracts one number from another.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides one number by another.
- **Modulo (`%`)**: Finds the remainder of division of one number by another.
- **Exponentiation (`**`)**: Raises a number to the power of another.

Example:
```solidity
pragma solidity ^0.8.0;

contract Arithmetic {
    function basicOperations(uint a, uint b) public pure returns (uint, uint, uint, uint, uint) {
        uint add = a + b;
        uint sub = a - b;
        uint mul = a * b;
        uint div = a / b;
        uint mod = a % b;
        return (add, sub, mul, div, mod);
    }

    function exponentiation(uint base, uint exponent) public pure returns (uint) {
        return base ** exponent;
    }
}
```

## 2. SafeMath Library

To prevent overflow and underflow errors in arithmetic operations, Solidity developers often use the SafeMath library. This library provides functions that perform arithmetic operations with safety checks.

Example:
```solidity
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SafeArithmetic {
    using SafeMath for uint256;

    function safeOperations(uint256 a, uint256 b) public pure returns (uint256, uint256, uint256, uint256, uint256) {
        uint256 add = a.add(b);
        uint256 sub = a.sub(b);
        uint256 mul = a.mul(b);
        uint256 div = a.div(b);
        uint256 mod = a.mod(b);
        return (add, sub, mul, div, mod);
    }
}
```

## 3. Fixed-Point Numbers

Solidity does not have built-in support for fixed-point numbers, but libraries like ABDKMath64x64 provide support for fixed-point arithmetic.

Example:
```solidity
pragma solidity ^0.8.0;

import "abdk-libraries-solidity/ABDKMath64x64.sol";

contract FixedPointArithmetic {
    using ABDKMath64x64 for int128;

    function fixedPointAdd(int128 x, int128 y) public pure returns (int128) {
        return x.add(y);
    }

    function fixedPointMul(int128 x, int128 y) public pure returns (int128) {
        return x.mul(y);
    }
}
```

## 4. Comparison Operators

Solidity also supports comparison operators which return boolean values:

- **Equality (`==`)**
- **Inequality (`!=`)**
- **Greater than (`>`)**
- **Less than (`<`)**
- **Greater than or equal to (`>=`)**
- **Less than or equal to (`<=`)**

Example:
```solidity
pragma solidity ^0.8.0;

contract Comparison {
    function compare(uint a, uint b) public pure returns (bool, bool, bool, bool, bool, bool) {
        bool eq = (a == b);
        bool neq = (a != b);
        bool gt = (a > b);
        bool lt = (a < b);
        bool gte = (a >= b);
        bool lte = (a <= b);
        return (eq, neq, gt, lt, gte, lte);
    }
}
```

## Conclusion

Understanding and correctly implementing arithmetic operations in Solidity is crucial for developing reliable and secure smart contracts. The use of libraries like SafeMath and ABDKMath64x64 can help mitigate common pitfalls such as overflow and underflow.
