
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
  
  
  
  app.get('/api/products/:productId/reviews/:reviewID',(req,res)=>{
   console.log(req.params)
   response.send('hello world')
  
  })
  
  
  app.get('/api/v1/query',(req,res)=>{
    //  console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search){
       sortedProducts=sortedProducts.filter(product=>{
       return product.name.startsWith(search)
    })
    }
    if(limit){
       sortedProducts=sortedProducts.slice(0,Number(limit))
    }
  
  if(sortedProducts.length<1){
    //  res.status(200).send('no product matched your search')
      return res.status(200).json({success:true,data:[]})
    
  }
  
     res.status(200).json(sortedProducts)
  
    })