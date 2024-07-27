
# Solidity Questions

## Multiple Choice Questions (MCQs)

1. What is Solidity primarily used for?
   - A) Web development
   - B) Smart contract development
   - C) Machine learning
   - D) Database management

2. Which keyword is used to define a state variable in Solidity?
   - A) var
   - B) let
   - C) uint
   - D) contract

3. What does the `public` keyword signify in a Solidity function?
   - A) The function is only accessible internally.
   - B) The function is not accessible at all.
   - C) The function is accessible externally and internally.
   - D) The function is accessible only to the owner.

4. Which of the following is not a valid visibility specifier in Solidity?
   - A) public
   - B) private
   - C) internal
   - D) external
   - E) protected

5. What is the correct syntax for importing the SafeMath library in Solidity?
   - A) `import "SafeMath.sol";`
   - B) `include "SafeMath.sol";`
   - C) `use "SafeMath.sol";`
   - D) `import "@openzeppelin/contracts/utils/math/SafeMath.sol";`

6. Which function is called only once during the lifetime of a Solidity contract?
   - A) fallback
   - B) receive
   - C) constructor
   - D) destructor

7. How do you declare a payable function in Solidity?
   - A) `function pay() public`
   - B) `function pay() external`
   - C) `function pay() public payable`
   - D) `function pay() payable`

8. What is the default visibility for state variables in Solidity?
   - A) public
   - B) private
   - C) internal
   - D) external

9. How is inheritance implemented in Solidity?
   - A) Using `extends` keyword
   - B) Using `inherits` keyword
   - C) Using `is` keyword
   - D) Using `extends` keyword

10. Which keyword is used to define a modifier in Solidity?
    - A) modifier
    - B) mod
    - C) function
    - D) public

11. What is the purpose of the `require` function in Solidity?
    - A) To revert the transaction
    - B) To check for conditions before execution
    - C) To emit an event
    - D) To define a new function

12. Which function is used to receive plain Ether transfers in Solidity?
    - A) fallback
    - B) receive
    - C) constructor
    - D) payable

13. How do you declare an interface in Solidity?
    - A) `interface InterfaceName { ... }`
    - B) `contract InterfaceName { ... }`
    - C) `abstract InterfaceName { ... }`
    - D) `struct InterfaceName { ... }`

14. What does `msg.sender` represent in Solidity?
    - A) The sender of the transaction
    - B) The recipient of the transaction
    - C) The value sent with the transaction
    - D) The data sent with the transaction

15. Which library is commonly used for fixed-point arithmetic in Solidity?
    - A) Math
    - B) SafeMath
    - C) ABDKMath64x64
    - D) FixedMath

## True/False Questions

1. Solidity is a dynamically-typed programming language. 
2. The `internal` visibility specifier makes a function accessible only within the contract and its derived contracts. 
3. Events in Solidity are used to trigger EVM logging facilities. 
4. The `constructor` function in Solidity is called every time a contract is invoked. 
5. Solidity does not support inheritance. 
6. State variables in Solidity are stored in contract storage. 
7. Functions with the `view` keyword can modify the contract's state. (False)
8. The `fallback` function can be used to handle Ether transfers. 
9. The `private` visibility specifier makes a function accessible from derived contracts. 
10. Solidity contracts can interact with other contracts on the blockchain. 

## Coding Questions

1. Write a Solidity contract that stores a single unsigned integer and has functions to set and get its value.

2. Write a Solidity contract that has a function to add two unsigned integers and return the result.

3. Create a Solidity contract with a state variable `owner` that is initialized to the address of the account that deploys the contract.

4. Write a Solidity contract that uses a modifier to ensure a function can only be called by the owner of the contract.

5. Implement a Solidity contract that has a payable function which allows users to send Ether to the contract.

6. Create a Solidity contract with an event that is emitted every time a certain function is called.

7. Write a Solidity contract that inherits from another contract and adds a new function to the derived contract.

8. Implement a Solidity contract that uses the `SafeMath` library for safe arithmetic operations.

9. Write a Solidity contract that has a function to transfer tokens using an interface.

10. Create a Solidity contract that includes a fallback function to handle Ether sent to the contract.
