// import PropTypes from 'prop-types';
// import Web3 from 'web3';
// import { useNavigate } from 'react-router-dom';
// import ABI from "./ABI.json"
// const Wallet =({saveState})=>{
//     const navigateTo =useNavigate();
//     const connectWallet =async()=>{
//        try{
//           if(window.ethereum){
//               const web3 = new Web3(window.ethereum);
//               const accounts = await window.ethereum.request({
//                 method:"eth_requestAccounts"
//               })
//               const contractAddress = "0x7f13590A8F2096ED0236181E8E7be19C4e610F7B";
//               const contract = new web3.eth.Contract(ABI,contractAddress);
//               saveState({web3:web3,contract:contract,account:accounts[0]})
//               navigateTo("/view-all-tasks")
//           }else{
//             throw new Error
//           }
//        }catch(error){
//           console.error(error)
//        }
//     }

//     return(
//       <>
//         <div className="wallet_header ">
//           <span>WELCOME TO</span> <p>TODO 3.0</p>
//         </div>
//         <div className="connect_wallet_section todo_btn">
//           <p> Please connect metamask wallet to access the app </p>
//           <button onClick={connectWallet}>Connect Wallet</button>
//         </div>
//       </>
//     );
// }
// Wallet.propTypes = {
//     saveState: PropTypes.func.isRequired,
//   };

// export default Wallet;

import PropTypes from "prop-types";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import ABI from "./ABI.json";

const Wallet = ({ saveState, state }) => {
  const navigateTo = useNavigate();

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const contractAddress = "0x7f13590A8F2096ED0236181E8E7be19C4e610F7B";
        const contract = new web3.eth.Contract(ABI, contractAddress);
        saveState({ web3, contract, account: accounts[0] });
        navigateTo("/view-all-tasks");
      } else {
        throw new Error("MetaMask not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (state.web3 && state.account) {
    navigateTo("/view-all-tasks");
  }

  return (
    <>
      <div className="wallet_header">
        <span>WELCOME TO</span> <p>TaskLedger</p>
      </div>
      <div className="connect_wallet_section todo_btn">
        <p>Please connect MetaMask wallet to access the app</p>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
    </>
  );
};

Wallet.propTypes = {
  saveState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    web3: PropTypes.object,
    contract: PropTypes.object,
    account: PropTypes.string,
  }),
};

export default Wallet;
