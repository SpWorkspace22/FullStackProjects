const express = require("express")
const connectDB = require('./db/connect')
const product = require("./router/product")
const cors=require("cors");

//server
const app = express()

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//middleware
app.use(express.json())

//Base Route
app.use("/api/v1/crudapp",product)

// start the server
const start = async() =>{
    try{
        await connectDB("mongodb://localhost:27017/crudapp")
        app.listen(5000,console.log("Server Stared"))
    }catch(err){
        console.log(err)
    }
}

start()
