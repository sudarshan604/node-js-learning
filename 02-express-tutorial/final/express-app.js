const express=require('express')
const path=require('path')
const app=express()

//setup static and middleware

app.use(express.static('./navbar-app'))//sabai navbar-app vitra vako static file load hunxa automatic


// app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// adding ti static assest
// server side rendering
// })

app.get('*',(req,res)=>{
     res.status(200).send('resource not found')
})

app.listen(5000,()=>{
  console.log('server is listening on port 5000...')


})

