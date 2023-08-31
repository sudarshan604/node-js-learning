require('express-async-errors')
require('dotenv').config()


const express =require('express')
const app=express()

//rest of the packages

const morgan=require('morgan')


const connectDB = require('./db/connect')
const errorHandlerMiddleware=require('./middleware/error-handler')
const notFoundMiddleware=require('./middleware/not-found')


app.use(morgan('tiny'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('ecommerce api')
})



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


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