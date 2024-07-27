
# TaskLedger ToDo App

The **TaskLedger ToDo App** is a decentralized application (dApp) for managing tasks on the Ethereum blockchain. This project includes a Solidity smart contract for task management and a React frontend for user interaction. The application is organized with a smart contract file, an API directory, and a client directory for the React application.

## File Structure

- `task.sol`: The Solidity smart contract file.
- `api/`: Directory for any backend API logic or scripts.
- `client/`: Directory containing the React frontend application.

## Overview

The TaskLedger smart contract allows users to create, update, view, and delete tasks. It maintains a ledger of tasks, each identified by a unique ID, and emits events for task creation, updating, and deletion. The React frontend enables users to interact with the smart contract through a web interface.



## Frontend

The frontend is a React application located in the `client/` directory. It interacts with the TaskLedger smart contract and allows users to manage tasks through a web interface.

### Setup

1. **Navigate to the Client Directory**:

   ```bash
   cd client
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Update Configuration**:

   - Locate the `src/config.js` file in the client directory.
   - Update the contract address and ABI with the values from your contract deployment.

4. **Start the React Application**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Deploying the Smart Contract

### Using Truffle

1. **Initialize Truffle Project**:

   If you haven't already, initialize a Truffle project:

   ```bash
   mkdir smart-contract
   cd smart-contract
   truffle init
   ```

2. **Place the Contract File**:

   Move `contract.sol` to the `contracts/` directory within the Truffle project.

3. **Deploy the Contract**:

   - Create a migration script in the `migrations/` directory (e.g., `2_deploy_contracts.js`):

     ```javascript
     const ToDo = artifacts.require("ToDo");

     module.exports = function (deployer) {
       deployer.deploy(ToDo);
     };
     ```

   - Compile and migrate:

     ```bash
     truffle compile
     truffle migrate --network <network-name>
     ```

   Replace `<network-name>` with your desired network (e.g., `development`, `rinkeby`).

### Obtaining Contract Address and ABI

After migration, note the contract address and ABI from the Truffle output. Update these values in your React frontend configuration.

## API (Optional)

If you have any backend API logic, it should be placed in the `api/` directory. This section is optional and depends on the specific requirements of your project.

## Testing

### Smart Contract Testing

Write test cases in the `test/` directory using Truffle's testing framework.

1. **Create Test Files**:

   Add test cases for your smart contract in the `test/` directory (e.g., `todo.test.js`).

2. **Run Tests**:

   ```bash
   cd smart-contract
   truffle test
   ```

### React Frontend Testing

You can run frontend tests using:

```bash
cd client
npm test
```

## Conclusion

The TaskLedger ToDo App showcases how to build a decentralized task management system using Ethereum smart contracts and a React frontend. This project demonstrates key concepts in blockchain development and modern web application design.
