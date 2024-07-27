const express = require('express')
const cors = require("cors")
const tasks=require('./routes/routes')
const app = express();

//user-/api/ethereum/create-task -> server.js -> routes.js -> controller.js -> tasks.js
app.use(cors())
app.use(express.json())
app.use('/api/ethereum',tasks)

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server Running At PORT ${PORT}`)
})


