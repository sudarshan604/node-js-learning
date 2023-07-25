require('dotenv').config()
require('express-async-errors') //instead of writing try catch manually in controller it will setup automatically to all the controller

const express=require('express')
const app=express()

//rest of the package
const morgan=require('morgan')//give the information about route in terminal console
const cookieParser=require('cookie-parser')





//database
const connectDB=require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//routes
const authRouter=require('./routes/authRoutes')
const userRouter=require('./routes/userRoutes')



app.use(morgan('tiny'))
app.use(express.json()) //we want to access json data like req.body
app.use(cookieParser(process.env.JWT_SECRET))



app.get('/',(req,res)=>{
  res.send('e-commerce api')
})


app.get('/api/v1',(req,res)=>{
  console.log(req.signedCookies)
  res.send('e-commerce api')
})



app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)


//middleware
app.use(notFound)
app.use(errorHandlerMiddleware)









const port=process.env.PORT || 3000




const start= async()=>{
  try {
     await connectDB(process.env.MONGO_URI)
     app.listen(port
      ,()=>{
     console.log(`server is listen on port ${port}`)
     })

  } catch (error) {
    }

}

start()