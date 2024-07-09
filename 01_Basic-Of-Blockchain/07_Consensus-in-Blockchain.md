# Consensus Algorithms in Blockchain

## Prerequisites

**Introduction to Blockchain technology:**

We know that Blockchain is a distributed decentralized network that provides immutability, privacy, security, and transparency. There is no central authority present to validate and verify the transactions, yet every transaction in the Blockchain is considered to be completely secured and verified. This is possible only because of the presence of the consensus protocol which is a core part of any Blockchain network.

## What is a Consensus Algorithm?

A consensus algorithm is a procedure through which all the peers of the Blockchain network reach a common agreement about the present state of the distributed ledger. In this way, consensus algorithms achieve reliability in the Blockchain network and establish trust between unknown peers in a distributed computing environment. Essentially, the consensus protocol makes sure that every new block that is added to the Blockchain is the one and only version of the truth that is agreed upon by all the nodes in the Blockchain.

### Objectives of Consensus Protocols

- Coming to an agreement
- Collaboration
- Cooperation
- Equal rights to every node
- Mandatory participation of each node in the consensus process

## Types of Consensus Algorithms

### 1. Proof of Work (PoW)

- **Description**: PoW is used to select a miner for the next block generation. Bitcoin uses this consensus algorithm.
- **Mechanism**: Miners solve a complex mathematical puzzle requiring substantial computational power. The first to solve the puzzle gets to mine the next block.
- **Pros**: Highly secure, well-tested.
- **Cons**: High energy consumption, vulnerability to 51% attacks.

### 2. Practical Byzantine Fault Tolerance (PBFT)

- **Description**: PBFT is used in permissioned blockchain networks.
- **Mechanism**: Nodes agree on the validity of transactions through a process of voting and reaching consensus despite some nodes potentially being malicious.
- **Pros**: Efficient, low energy consumption.
- **Cons**: Requires a fixed set of validators, less suitable for public blockchains.

### 3. Proof of Stake (PoS)

- **Description**: An alternative to PoW, used by Ethereum.
- **Mechanism**: Validators lock up some of their coins as stakes. Validators are chosen to generate new blocks based on their economic stake in the network.
- **Pros**: Energy efficient, encourages saving.
- **Cons**: Potential centralization, the "rich get richer" problem.

### 4. Delegated Proof of Stake (DPoS)

- **Description**: A variant of PoS.
- **Mechanism**: Users delegate their votes to elect a small number of delegates who will validate transactions and maintain the blockchain.
- **Pros**: High transaction throughput, more democratic than PoS.
- **Cons**: Vulnerability to cartels, potential centralization.

### 5. Proof of Burn (PoB)

- **Description**: Validators burn coins to earn the privilege to mine.
- **Mechanism**: Coins are sent to an irretrievable address, validators are selected based on the number of coins burned.
- **Pros**: Long-term commitment, low energy consumption.
- **Cons**: Waste of resources, similar "rich get richer" issues as PoS.

### 6. Proof of Capacity (PoC)

- **Description**: Validators use hard drive space for mining.
- **Mechanism**: More hard drive space increases chances of mining the next block.
- **Pros**: Low energy consumption, uses existing hardware.
- **Cons**: Still requires significant storage, potential centralization.

### 7. Proof of Elapsed Time (PoET)

- **Description**: Used in permissioned blockchain networks, such as Hyperledger Sawtooth.
- **Mechanism**: Nodes wait for a random time before creating a block. The one with the shortest wait time wins.
- **Pros**: Energy efficient, fair selection process.
- **Cons**: Requires trusted execution environments, reliance on specific hardware.

## Other Consensus Algorithms

- **Proof of Activity**: A hybrid of PoW and PoS.
- **Proof of Importance**: Rewards participants based on their activity in the network.
- **Leased Proof of Stake (LPoS)**: Coin holders lease their stakes to a node.
- **Proof of Weight**: Based on the weight (amount of cryptocurrency) held by the user.

<p align="center">
<img src="../Images/Blockchain-Consensus-Algorithms.png" width=500">
</p>

# Comparison of Consensus Algorithms in Blockchain

| **Consensus Algorithm**                        | **Description**                                                     | **Mechanism**                                                                                                | **Pros**                                              | **Cons**                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| **Proof of Work (PoW)**                        | Used to select a miner for the next block generation.               | Miners solve a complex mathematical puzzle requiring substantial computational power.                        | Highly secure, well-tested                            | High energy consumption, vulnerability to 51% attacks                    |
| **Practical Byzantine Fault Tolerance (PBFT)** | Used in permissioned blockchain networks.                           | Nodes agree on transaction validity through a voting process despite some nodes being potentially malicious. | Efficient, low energy consumption                     | Requires a fixed set of validators, less suitable for public blockchains |
| **Proof of Stake (PoS)**                       | Alternative to PoW, used by Ethereum.                               | Validators lock up coins as stakes and are chosen based on their economic stake.                             | Energy efficient, encourages saving                   | Potential centralization, "rich get richer" problem                      |
| **Delegated Proof of Stake (DPoS)**            | A variant of PoS.                                                   | Users delegate votes to elect delegates who validate transactions and maintain the blockchain.               | High transaction throughput, more democratic than PoS | Vulnerability to cartels, potential centralization                       |
| **Proof of Burn (PoB)**                        | Validators burn coins to earn mining privileges.                    | Coins are sent to an irretrievable address, validators are selected based on the number of coins burned.     | Long-term commitment, low energy consumption          | Waste of resources, similar "rich get richer" issues as PoS              |
| **Proof of Capacity (PoC)**                    | Validators use hard drive space for mining.                         | More hard drive space increases chances of mining the next block.                                            | Low energy consumption, uses existing hardware        | Requires significant storage, potential centralization                   |
| **Proof of Elapsed Time (PoET)**               | Used in permissioned blockchain networks like Hyperledger Sawtooth. | Nodes wait for a random time before creating a block, the one with the shortest wait time wins.              | Energy efficient, fair selection process              | Requires trusted execution environments, reliance on specific hardware   |
| **Proof of Activity**                          | Hybrid of PoW and PoS.                                              | Miners solve a cryptographic puzzle (PoW) and then validators (PoS) confirm the block.                       | Combines benefits of PoW and PoS                      | Inherits drawbacks of both PoW and PoS                                   |
| **Proof of Importance**                        | Rewards participants based on their activity in the network.        | Participants frequently send and receive transactions to increase their importance score.                    | Encourages network activity                           | Complexity in calculating importance score                               |
| **Leased Proof of Stake (LPoS)**               | Variation of PoS developed by WAVES.                                | Coin holders lease their stakes to nodes, enhancing the node’s weight and chances to add a block.            | Encourages wider participation, improves security     | Complexity in leasing mechanism, potential centralization                |

## Conclusion

Consensus algorithms are essential for the proper functioning of blockchain networks. They ensure that all transactions are verified and agreed upon by all nodes in a decentralized manner. Selecting the right consensus protocol is crucial for the success and security of a blockchain project.

## References

- Google
- Medium
- ChatGPT
- Notes from YouTube
