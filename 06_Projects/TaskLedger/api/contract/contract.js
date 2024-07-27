const { Web3 } = require("web3");
const { dotenv } = require("dotenv");
const ABI = require("../ABI.json");
const web3 = new Web3("https://sepolia.infura.io/v3/db2b24363e9847c0b0373d8f4259867a");
const contractAddress = "0x7f13590A8F2096ED0236181E8E7be19C4e610F7B";
const contract = new web3.eth.Contract(ABI, contractAddress);

module.exports = { contract }