// const app=require('express')();
const express=require('express');
const app=express()
//app.get Read data by default
//app.post Insert data
//app.put update data
//app.delete delete data

//app.all
//app.use
//app.listen


app.get('/',(req,res)=>{
  res.status(200).send('home page')

})
app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})
app.all('*',(req,res)=>{
     res.status(404).send('<h1>resource not found</h1>')
})



app.listen(5000,()=>{
    console.log('server is running on port 5000...')
})








































