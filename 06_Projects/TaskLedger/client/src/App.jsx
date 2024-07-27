// import {useState} from "react";
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import CreateTask from './pages/CreateTask'
// import Wallet from './pages/Wallet'
// import ViewAllTasks from './pages/ViewAllTasks'
// import UpdateTask from './pages/UpdateTask'
// import ViewTask from './pages/ViewTask'
// import DeleteTask from './pages/DeleteTask';

// import './App.css'

// function App() {
//   const [state,setState]=useState({web3:null,contract:null,account:null})

//   const saveState=({web3,contract,account})=>{
//     setState({web3:web3,contract:contract,account:account})
//   }
//   const router = createBrowserRouter([
//     {path:'/',element:<Wallet saveState={saveState}/>},
//     {path:'/view-all-tasks',element:<ViewAllTasks/>},
//     {path:'/create-task',element:<CreateTask state={state}/>},
//     {path:'/view-task',element:<ViewTask/>},
//     {path:'/update-task',element:<UpdateTask state={state}/>},
//     {path:'/delete-task',element:<DeleteTask state={state}/>}
//   ])

//   return (
//     <>
//      <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Wallet from "./pages/Wallet";
import ViewAllTasks from "./pages/ViewAllTasks";
import UpdateTask from "./pages/UpdateTask";
import ViewTask from "./pages/ViewTask";
import DeleteTask from "./pages/DeleteTask";

import Web3 from "web3";
import ABI from "./pages/ABI.json"; // Assuming ABI.json is in the pages directory

import "./App.css";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    account: null,
  });

  useEffect(() => {
    const savedAccount = localStorage.getItem("account");
    if (savedAccount) {
      const web3 = new Web3(window.ethereum);
      const contractAddress = "0x7f13590A8F2096ED0236181E8E7be19C4e610F7B";
      const contract = new web3.eth.Contract(ABI, contractAddress);
      setState({ web3, contract, account: savedAccount });
    }
  }, []);

  const saveState = ({ web3, contract, account }) => {
    setState({ web3, contract, account });
    localStorage.setItem("account", account);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Wallet saveState={saveState} state={state} /> },
    { path: "/view-all-tasks", element: <ViewAllTasks /> },
    { path: "/create-task", element: <CreateTask state={state} /> },
    { path: "/view-task", element: <ViewTask /> },
    { path: "/update-task", element: <UpdateTask state={state} /> },
    { path: "/delete-task", element: <DeleteTask state={state} /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
