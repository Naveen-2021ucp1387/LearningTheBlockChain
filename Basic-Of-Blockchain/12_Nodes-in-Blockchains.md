# Blockchain Nodes: Detailed Explanation

## Definition

A blockchain is a distributed ledger composed of a network of multiple nodes. Blockchain nodes are the moderators that build the infrastructure of a decentralized network. Their primary function is to maintain the public ledger's consensus, which varies according to the type of node. The architecture and design requirements of a particular blockchain protocol determine the types of nodes. Each of the nodes has a specific role to play in maintaining the operation of the blockchain ecosystem.

Blockchain nodes communicate with each other to broadcast to the network and acquire the necessary consensus to map and validate new blocks in accordance with the consensus algorithm of the network. In simplified terms, a blockchain node is one of the computers that collectively run the blockchain’s software. It enables the blockchain to validate transactions and keep the network secure ensuring that the network remains decentralized. Every participant in a decentralized network is a node, and each node is critical to the network's security and stability.

## Types of Blockchain Nodes

There are different types of nodes in a Blockchain network that serve various purposes. Nodes communicate with each other through a peer-to-peer network, allowing them to exchange information while maintaining consensus on the state of the Blockchain.

### 1. Full Nodes

Full Nodes maintain a complete copy of the Blockchain ledger. These nodes are able to independently verify the entire Blockchain history since they download and store copies of every transaction and block that occurs on the network. The stability of the Blockchain network depends on Full Nodes, which constitute the foundation of the network.

**Key Features:**
- Maintain a complete copy of the blockchain.
- Validate transactions and blocks.
- Communicate with other nodes to ensure network accuracy.

### 2. Light Nodes

Light Nodes are a more lightweight variation of Full Nodes, also known as SPV (Simplified Payment Verification) nodes. They do not download the entire Blockchain but rather a small portion of it that contains information relevant to their transactions.

**Key Features:**
- Do not store the entire blockchain.
- Rely on Full Nodes for transaction validation.
- Designed for mobile devices with limited storage and processing power.

### 3. Miner Nodes

Miner Nodes are responsible for validating transactions and generating new blocks on the Blockchain. They execute complex calculations to solve mathematical problems, allowing them to create new blocks and receive rewards in the form of cryptocurrency.

**Key Features:**
- Validate transactions and create new blocks.
- Require specialized hardware and software.
- Earn rewards for mining new blocks.

### 4. Pruned Full Nodes

Pruned Full Nodes have limited memory and download the blockchain, then delete old blocks in chronological order, starting with the oldest. They retain metadata and sequence of blocks but keep only the most recent transactions up to their memory limit.

**Key Features:**
- Store only the most recent blockchain transactions.
- Reduce storage requirements while maintaining network security.

### 5. Archival Full Nodes

Archival Full Nodes store the entire blockchain ledger, meaning all transactions from the beginning of time. They are essential for verifying transaction data from earlier in the blockchain’s history.

**Key Features:**
- Store complete blockchain history.
- Essential for verifying historical transactions.

### 6. Authority Nodes

Authority Nodes are approved by the organization or community managing a blockchain. Found in blockchains with a vetting process, these nodes are part of proof-of-authority mechanisms, using only approved nodes managed by identified operators.

**Key Features:**
- Approved by blockchain administrators.
- Used in proof-of-authority blockchains.

### 7. Master Nodes

Master Nodes are distinguished from normal Full Nodes by specific privileges and responsibilities. They validate transactions, maintain a blockchain record, and execute managing, governing, and regulatory functions.

**Key Features:**
- Validate transactions and maintain blockchain records.
- Execute additional protocol-defined functions.
- Often require a financial commitment in the form of collateral.

### 8. Staking Nodes

Staking Nodes use a method known as “staking” in their authentication process. Participants lock funds as collateral, and the proof-of-stake consensus model randomly designates authentication powers to them.

**Key Features:**
- Use locked funds as collateral.
- Selected to confirm blocks based on predetermined metrics.

### 9. Lightning Nodes

Lightning Nodes execute transactions off-chain through separate connections to alleviate network congestion. They process transactions and submit them to the main blockchain.

**Key Features:**
- Perform off-chain transactions.
- Reduce network congestion and transaction fees.

### 10. Super Nodes

Super Nodes perform specialized tasks on demand, such as implementing protocol changes or managing protocols. They are rare and created for specific purposes.

**Key Features:**
- Perform specialized tasks.
- Implement protocol changes and management.

## Node versus Miner

### Node

- A computer (or participant) connected to the peer-to-peer network, storing a copy of the blockchain.
- Requires only software to connect to the network.
- Receives no direct financial incentive for running a node.
- Can be a Full Node or Light Node, depending on the amount of data they store.
- Support the ‘consensus’ model process by verifying transactions and blocks.
- Can be run by anyone, contributing to decentralization.
- Uses much less energy than mining.

### Miner

- Mines and creates new blocks, adds, and validates transactions.
- Creates the next block in the chain using the header data hash of the previous block and a new hash for the current block.
- Requires specialized hardware, high computing power, and energy consumption.
- Verifies cryptocurrency transactions and creates new units of cryptocurrency.
- Earns rewards in the form of new cryptocurrency units and transaction fees.
- Must be a full node in order to participate in mining.
- Mining is often concentrated in the hands of a few large mining pools.

## Conclusion

Blockchain node types function as blockchain storage containers, allowing users to access and acquire data from the network. They are entirely transparent and accessible to everybody on the network, and they serve as a vital point of interaction for users. Overall, the role of different types of nodes in blockchain networks is essential for the network's security, stability, and accessibility.
