const express=require('express')
const logger=require('./logger')
const products=require('./data')
//req=>middleware=>res

const app=express()

// const logger=(req,res,next)=>{
//   const method=req.method
//   const url=req.url
//   const time=new Date().getFullYear()
//   console.log(method,url,time)
//   next()
//   //  res.send('testing')
// }

app.use(logger)//it apply in all route remember order matter
app.use('/api',logger)//it apply on only route after /api



app.get('/',logger,(req,res)=>{
 

  res.send('home')
})

app.get('/about',logger,(req,res)=>{
   
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})

















