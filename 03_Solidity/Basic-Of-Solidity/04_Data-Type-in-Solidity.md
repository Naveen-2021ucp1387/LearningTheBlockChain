# Solidity – Data Types

Solidity is a statically typed language, which implies that the type of each of the variables should be specified. Data types allow the compiler to check the correct usage of the variables. The declared types have some default values called Zero-State, for example for `bool` the default value is `False`. Like other statically typed languages, Solidity has Value types and Reference types which are defined below:

# Value Types

Value-type variables store their own data. These are the basic data types provided by Solidity. These types of variables are always passed by value. The variables are copied wherever they are used in function arguments or assignments. Value type data types in Solidity are listed below:

## Boolean

This data type accepts only two values: `True` or `False`.

## Integer

This data type is used to store integer values. `int` and `uint` are used to declare signed and unsigned integers respectively.

## Fixed Point Numbers

These data types are not fully supported in Solidity yet, as per the Solidity documentation. They can be declared as `fixed` and `ufixed` for signed and unsigned fixed-point numbers of varying sizes respectively.

## Address

Address holds a 20-byte value which represents the size of an Ethereum address. An address can be used to get a balance or to transfer a balance by `balance` and `transfer` methods respectively.

## Bytes

Although bytes are similar to strings, there are some differences between them. `bytes` is used to store a fixed-sized character set while the `string` is used to store the character set equal to or more than a byte. The length of bytes is from 1 to 32, while the string has a dynamic length. Bytes have the advantage that they use less gas, so better to use when we know the length of data.

## Enums

It is used to create user-defined data types, used to assign a name to an integral constant which makes the contract more readable, maintainable, and less prone to errors. Options of enums can be represented by unsigned integer values starting from 0.

### Example

In the below example, the contract `Types` initializes the values of different types of Value Types.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;
// For now, this contract just show how Value types works in solidity
contract Types {

    // Initializing Bool variable
    bool public boolean = false;

    // Initializing Integer variable
    int32 public int_var = -60313;

    // Initializing String variable
    string public str = "BlockChainLearning";

    // Initializing Byte variable
    bytes1 public b = "a";

    // Defining an enumerator
    enum my_enum { block, chain, learn }

    // Defining a function to return
    // values stored in an enumerator
    function Enum() public pure returns(
    my_enum) {
        return my_enum.block;
    }
}
```

# Reference Types

Reference type variables store the location of the data. They don’t share the data directly. With the help of reference type, two different variables can refer to the same location where any change in one variable can affect the other one. Reference types in Solidity are listed below:

## Arrays

An array is a group of variables of the same data type in which the variable has a particular location known as an index. By using the index location, the desired variable can be accessed. The array size can be fixed or dynamic.

## Strings

Strings are like arrays of characters. When we use them, we might occupy bigger or shorter storage space.

## Struct

Solidity allows users to create and define their own type in the form of structures. The structure is a group of different types even though it’s not possible to contain a member of its own type. The structure is a reference type variable that can contain both value type and reference type.

## Mapping

Mapping is the most used reference type, that stores the data in a key-value pair where a key can be any value type. It is like a hash table or dictionary as in any other programming language, where data can be retrieved by key.

### Example

In the below example, the contract `Types` initializes the values of various Reference Types.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;
// For now, this contract just show how Reference types works in solidity
contract mapping_example {

    // Defining an array
    uint[5] public array = [uint(1), 2, 3, 4, 5] ;

    // Defining a Structure
    struct student {
        string name;
        string subject;
        uint8 marks;
    }

    // Creating a structure object
    student public std1;

    // Defining a function to return
    // values of the elements of the structure
    function structure() public returns(
    string memory, string memory, uint){
        std1.name = "John";
        std1.subject = "Chemistry";
        std1.marks = 88;
        return (std1.name, std1.subject, std1.marks);
    }

    // Creating a mapping
    mapping (address => student) result;
    address[] student_result;
}
```

# Types

Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. Solidity provides several elementary types which can be combined to form complex types.

In addition, types can interact with each other in expressions containing operators. For a quick reference of the various operators, see Order of Precedence of Operators.

The concept of “undefined” or “null” values does not exist in Solidity, but newly declared variables always have a default value dependent on its type. To handle any unexpected values, you should use the `revert` function to revert the whole transaction, or return a tuple with a second `bool` value denoting success.

# Value Types

The following are called value types because their variables will always be passed by value, i.e. they are always copied when they are used as function arguments or in assignments.

## Booleans

```solidity
bool: The possible values are constants true and false.
```

Operators:

- `!` (logical negation)
- `&&` (logical conjunction, “and”)
- `||` (logical disjunction, “or”)
- `==` (equality)
- `!=` (inequality)

The operators `||` and `&&` apply the common short-circuiting rules. This means that in the expression `f(x) || g(y)`, if `f(x)` evaluates to true, `g(y)` will not be evaluated even if it may have side-effects.

## Integers


int / uint: Signed and unsigned integers of various sizes. Keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.


Operators:

- Comparisons: `<=`, `<`, `==`, `!=`, `>=`, `>` (evaluate to `bool`)
- Bit operators: `&`, `|`, `^` (bitwise exclusive or), `~` (bitwise negation)
- Shift operators: `<<` (left shift), `>>` (right shift)
- Arithmetic operators: `+`, `-`, unary `-` (only for signed integers), `*`, `/`, `%` (modulo), `**` (exponentiation)

For an integer type `X`, you can use `type(X).min` and `type(X).max` to access the minimum and maximum value representable by the type.

### **Warning**

Integers in Solidity are restricted to a certain range. For example, with `uint32`, this is `0` up to `2**32 - 1`. There are two modes in which arithmetic is performed on these types: The “wrapping” or “unchecked” mode and the “checked” mode. By default, arithmetic is always “checked”, meaning that if an operation’s result falls outside the value range of the type, the call is reverted through a failing assertion. You can switch to “unchecked” mode using `unchecked { ... }`. More details can be found in the section about unchecked.

### Comparisons

The value of a comparison is the one obtained by comparing the integer value.

## Bit operations

Bit operations are performed on the two’s complement representation of the number. This means that, for example `~int256(0) == int256(-1)`.

## Shifts

The result of a shift operation has the type of the left operand, truncating the result to match the type. The right operand must be of unsigned type, trying to shift by a signed type will produce a compilation error.

Shifts can be “simulated” using multiplication by powers of two in the following way. Note that the truncation to the type of the left operand is always performed at the end, but not mentioned explicitly.

- `x << y` is equivalent to the mathematical expression `x * 2**y`.
- `x >> y` is equivalent to the mathematical expression `x / 2**y`, rounded towards negative infinity.

### **Warning**

Before

Solidity version 0.5.0, the right operand of a shift operation was interpreted as an `int256` and thus sign-extended. You should be aware of this if you use a shift in combination with an expression that does not evaluate to an unsigned integer. However, this does not affect fixed-size types `uint8`, `uint16`, …, `uint256`.

### Literals

Decimal literals can be used with or without a suffix to denote the exact type. A literal without a suffix will automatically be assigned the smallest type large enough to hold the value.

```solidity
2**800 is 2**8 * 2**792 = 0xFF...FF * 2**792 = 0xFF..FF000...000
2**-800 is 2**-8 / 2**792 = 1/0xFF..FF / 2**792 = 1 / 0xFF..FF000...000
```

## Fixed Point Numbers

**Fixed point numbers are not fully supported by Solidity yet.**

There are two types of fixed point numbers:

- `fixed / ufixed`: Signed and unsigned fixed-point number of various sizes. Keywords `ufixed8x1` to `ufixed256x80` and `fixed8x1` to `fixed256x80` in steps of 8 bits. `ufixed` and `fixed` are synonyms for `ufixed128x18` and `fixed128x18`, respectively.
- `fixedMxN` and `ufixedMxN` represents `MxN` fixed point numbers. `M` represents the total number of bits taken by the type, while `N` represents the number of decimal points. So `ufixed128x18` is an unsigned fixed point number that can hold a value up to `2**128 - 1` and has 18 decimal points.

## Addresses


address / address payable: Holds a 20 byte value (size of an Ethereum address). address is not allowed to contain any member function and address payable contains some member functions.

The difference between address and address payable is that address payable can receive ether.

## Reference Types

Reference types are more complex data types that reference or point to a location where data is stored. They include arrays, structs, and mappings. These types hold data that can be manipulated, shared, or referenced by multiple variables.

### Arrays

An array is a collection of variables of the same type stored in contiguous memory locations. Arrays can be of fixed size or dynamic size.

```solidity
// Fixed-size array
uint[5] fixedArray;

// Dynamic array
uint[] dynamicArray;
```

### Strings

Strings are similar to arrays but are specifically designed to hold sequences of characters. Unlike fixed-size arrays, strings in Solidity are dynamic and can grow or shrink in size.

```
string name = "LearningTheBlockChain";
```

### Structs

Structs allow users to create more complex data types that group together variables of different types. Structs are reference types and can contain both value and reference types.

```
struct Student {
    string name;
    uint8 age;
    uint16 marks;
}
```

### Mappings

Mappings are reference types that store data in key-value pairs. They are similar to hash tables or dictionaries in other programming languages.

```
mapping(address => uint) public balances;
```

Mappings are particularly useful for creating more complex data structures like associative arrays.

## Example of Reference Types

Below is an example of how to use various reference types in Solidity:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract ReferenceTypesExample {

    // Defining an array
    uint[5] public fixedArray = [uint(1), 2, 3, 4, 5];
    uint[] public dynamicArray;

    // Defining a Struct
    struct Student {
        string name;
        uint8 age;
        uint16 marks;
    }

    // Creating a structure object
    Student public student1;

    // Defining a function to set values for the structure
    function setStudent(string memory _name, uint8 _age, uint16 _marks) public {
        student1.name = _name;
        student1.age = _age;
        student1.marks = _marks;
    }

    // Defining a mapping
    mapping(address => uint) public balances;

    // Function to set balance for an address
    function setBalance(address _addr, uint _balance) public {
        balances[_addr] = _balance;
    }
}
```

In this example, we define a fixed-size array, a dynamic array, a struct, and a mapping. We also provide functions to interact with these reference types, demonstrating how to set and retrieve values.

By understanding and utilizing these data types, developers can create complex and efficient smart contracts in Solidity.
