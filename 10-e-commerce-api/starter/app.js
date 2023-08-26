require('dotenv').config()
const express =require('express')
const connectDB = require('./db/connect')
const app=express()


app.get('/',(req,res)=>{
    res.send('ecommerce api')
})


const port=process.env.PORT || 3000


const start=async()=>{  
  
     await connectDB(process.env.MONGO_URI)

    try{
app.listen(port,()=>{
    console.log(`port is listening at port number ${port}`)
})
    }
    catch{

    }
}

start()