const Product =require('../models/product')


const getAllProductsStatic=async(req,res)=>{
  
     const search='ab'
     
     const products=await Product.find({name:{$regex:search,$options:'i'}});
   
     res.status(200).json({products,
          nbHits:products.length
      })
     // res.status(200).json({msg:'product testing route'})


}
const getAllProducts=async (req,res)=>{
   
  const {featured,company,name}=req.query  //if from url page and featured pass as argument
  
  const queryObject={}

  if(featured){                  //if there is featured then it only retutn featured true or false
      queryObject.featured=featured==='true'?true:false
  }

   if(company){
       queryObject.company=company
   }

if(name){
      queryObject.name={$regex:name,$options:'i'}
}

  console.log(queryObject)         //if queryObject is empty {} if we passed page also then also all the value will return
   const products=await Product.find(queryObject)
   res.status(200).json({products,nbHits:products.length})

}

module.exports={
   getAllProducts,
   getAllProductsStatic   
}