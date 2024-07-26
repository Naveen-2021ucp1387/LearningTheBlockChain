
# Solidity Questions and Solutions

## Multiple Choice Questions (MCQs)

1. **What is Solidity primarily used for?**
   - **Answer:** B) Smart contract development

2. **Which keyword is used to define a state variable in Solidity?**
   - **Answer:** C) uint

3. **What does the `public` keyword signify in a Solidity function?**
   - **Answer:** C) The function is accessible externally and internally.

4. **Which of the following is not a valid visibility specifier in Solidity?**
   - **Answer:** E) protected

5. **What is the correct syntax for importing the SafeMath library in Solidity?**
   - **Answer:** D) `import "@openzeppelin/contracts/utils/math/SafeMath.sol";`

6. **Which function is called only once during the lifetime of a Solidity contract?**
   - **Answer:** C) constructor

7. **How do you declare a payable function in Solidity?**
   - **Answer:** C) `function pay() public payable`

8. **What is the default visibility for state variables in Solidity?**
   - **Answer:** C) internal

9. **How is inheritance implemented in Solidity?**
   - **Answer:** C) Using `is` keyword

10. **Which keyword is used to define a modifier in Solidity?**
    - **Answer:** A) modifier

11. **What is the purpose of the `require` function in Solidity?**
    - **Answer:** B) To check for conditions before execution

12. **Which function is used to receive plain Ether transfers in Solidity?**
    - **Answer:** B) receive

13. **How do you declare an interface in Solidity?**
    - **Answer:** A) `interface InterfaceName { ... }`

14. **What does `msg.sender` represent in Solidity?**
    - **Answer:** A) The sender of the transaction

15. **Which library is commonly used for fixed-point arithmetic in Solidity?**
    - **Answer:** C) ABDKMath64x64

## True/False Questions

1. **Solidity is a dynamically-typed programming language.** (False)
2. **The `internal` visibility specifier makes a function accessible only within the contract and its derived contracts.** (True)
3. **Events in Solidity are used to trigger EVM logging facilities.** (True)
4. **The `constructor` function in Solidity is called every time a contract is invoked.** (False)
5. **Solidity does not support inheritance.** (False)
6. **State variables in Solidity are stored in contract storage.** (True)
7. **Functions with the `view` keyword can modify the contract's state.** (False)
8. **The `fallback` function can be used to handle Ether transfers.** (True)
9. **The `private` visibility specifier makes a function accessible from derived contracts.** (False)
10. **Solidity contracts can interact with other contracts on the blockchain.** (True)

## Coding Questions

1. **Write a Solidity contract that stores a single unsigned integer and has functions to set and get its value.**
    ```solidity
    pragma solidity ^0.8.0;

    contract SimpleStorage {
        uint storedData;

        function set(uint x) public {
            storedData = x;
        }

        function get() public view returns (uint) {
            return storedData;
        }
    }
    ```

2. **Write a Solidity contract that has a function to add two unsigned integers and return the result.**
    ```solidity
    pragma solidity ^0.8.0;

    contract Adder {
        function add(uint a, uint b) public pure returns (uint) {
            return a + b;
        }
    }
    ```

3. **Create a Solidity contract with a state variable `owner` that is initialized to the address of the account that deploys the contract.**
    ```solidity
    pragma solidity ^0.8.0;

    contract Owned {
        address public owner;

        constructor() {
            owner = msg.sender;
        }
    }
    ```

4. **Write a Solidity contract that uses a modifier to ensure a function can only be called by the owner of the contract.**
    ```solidity
    pragma solidity ^0.8.0;

    contract Owned {
        address public owner;

        constructor() {
            owner = msg.sender;
        }

        modifier onlyOwner() {
            require(msg.sender == owner, "Not the contract owner");
            _;
        }

        function restrictedFunction() public onlyOwner {
            // Function logic
        }
    }
    ```

5. **Implement a Solidity contract that has a payable function which allows users to send Ether to the contract.**
    ```solidity
    pragma solidity ^0.8.0;

    contract Deposit {
        function deposit() public payable {
            // Function logic to handle deposit
        }

        function getBalance() public view returns (uint) {
            return address(this).balance;
        }
    }
    ```

6. **Create a Solidity contract with an event that is emitted every time a certain function is called.**
    ```solidity
    pragma solidity ^0.8.0;

    contract EventExample {
        event DataStored(uint indexed data);

        uint public data;

        function storeData(uint _data) public {
            data = _data;
            emit DataStored(_data);
        }
    }
    ```

7. **Write a Solidity contract that inherits from another contract and adds a new function to the derived contract.**
    ```solidity
    pragma solidity ^0.8.0;

    contract Base {
        function baseFunction() public pure returns (string memory) {
            return "Base function";
        }
    }

    contract Derived is Base {
        function derivedFunction() public pure returns (string memory) {
            return "Derived function";
        }
    }
    ```

8. **Implement a Solidity contract that uses the `SafeMath` library for safe arithmetic operations.**
    ```solidity
    pragma solidity ^0.8.0;

    import "@openzeppelin/contracts/utils/math/SafeMath.sol";

    contract SafeMathExample {
        using SafeMath for uint256;

        function safeAdd(uint256 a, uint256 b) public pure returns (uint256) {
            return a.add(b);
        }

        function safeSub(uint256 a, uint256 b) public pure returns (uint256) {
            return a.sub(b);
        }
    }
    ```

9. **Write a Solidity contract that has a function to transfer tokens using an interface.**
    ```solidity
    pragma solidity ^0.8.0;

    interface Token {
        function transfer(address recipient, uint amount) external;
    }

    contract TokenTransfer {
        Token token;

        constructor(address tokenAddress) {
            token = Token(tokenAddress);
        }

        function transferTokens(address recipient, uint amount) public {
            token.transfer(recipient, amount);
        }
    }
    ```

10. **Create a Solidity contract that includes a fallback function to handle Ether sent to the contract.**
    ```solidity
    pragma solidity ^0.8.0;

    contract FallbackExample {
        event Received(address, uint);

        fallback() external payable {
            emit Received(msg.sender, msg.value);
        }

        receive() external payable {
            emit Received(msg.sender, msg.value);
        }

        function getBalance() public view returns (uint) {
            return address(this).balance;
        }
    }
    ```