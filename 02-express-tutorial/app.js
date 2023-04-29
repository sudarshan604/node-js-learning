const express=require('express')
const app=express()
const {products}=require('./data')


app.get('/',(req,res)=>{
  res.send('<h1>Hoe page</h1> <a href="api/products">producrs</a>')
})
app.get('/api/products',(req,res)=>{
 const newProducts= products.map(product=>{
  const {id,name,image}=product
   return {id,name,image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productId',(req,res)=>{
    
  console.log(req.params)
  
  const newProduct=products.find(product=>{
          if (product.id==1)
           {
            return product
           }
    })

    res.json(newProduct)
  })


app.listen(5000,()=>{
  console.log('server is listening on port 5000')
})

