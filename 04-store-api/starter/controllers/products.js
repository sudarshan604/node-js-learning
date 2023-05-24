const Product =require('../models/product')


const getAllProductsStatic=async(req,res)=>{
  
    //  const search='ab'
    //  const products=await Product.find({name:{$regex:search,$options:'i'}});
    //   const products=await Product.find({}).sort('-name price');
      // const products=await Product.find({}).sort('name').select('name price').limit(10);
      const products=await Product.find({price:{$gt:30}}).sort('name').select('name price').limit(10);
      res.status(200).json({products,
          nbHits:products.length
      })
     // res.status(200).json({msg:'product testing route'})


}
const getAllProducts=async (req,res)=>{
   
  const {featured,company,name,sort,fields,numericFilters}=req.query  //if from url page and featured pass as argument
  
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

if(numericFilters){  
  const operatorMap={
      '>':'$gt',
      '>=':'$gte',
      '=':'$eq',
      "<":'$lt',
      '<=':'$lte'
  }
 
const regEx=/\b(<|>|>=|=|<=)\b/g


let filters=numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)

const options=['price','rating']
filters=filters.split(',').forEach((item) => {
   const [field,oprator,value]=item.split('-')
  if(options.includes(field)){
      queryObject[field]={[oprator]:Number(value)}
  }


});

}

  console.log(queryObject)         //if queryObject is empty {} if we passed page also then also all the value will return
  
  let result= Product.find(queryObject)
 if(sort){
    const sortList=sort.split(',').join(' ');
    result=result.sort(sortList)
}  
else{
     result=result.sort('createdAt')
}

if(fields){
    const fieldsList=fields.split(',').join(' ');
    result=result.select(fieldsList)
}

const page=Number(req.query.page) || 1
const limit=Number(req.query.limit)|| 10
const skip =(page-1) * limit;


result=result.skip(skip).limit(limit)
//23/7
// 7 7 7 2

const products=await result
  res.status(200).json({products,nbHits:products.length})

}

module.exports={
   getAllProducts,
   getAllProductsStatic   
}