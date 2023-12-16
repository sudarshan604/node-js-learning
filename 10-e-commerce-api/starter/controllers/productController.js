 const Product=require('../models/Product')
 const {StatusCodes}=require('http-status-codes')
 const CustomError=require('../errors')
const path=require('path')
 
 const createProduct=async(req,res)=>{
     req.body.user=req.user.userId   
     
     const product= await Product.create(req.body)

    res.status(StatusCodes.CREATED).json({product})


}

 const getAllProducts=async(req,res)=>{
  
    const products=await Product.find({})

    res.status(StatusCodes.OK).json({Products:products,count:products.length})
 

    res.send('all product')
}

 const getSingleProduct=async(req,res)=>{

   const {id:productsId}=req.params


   const product= await Product.findOne({_id:productsId})

 if(!product){
    throw new CustomError.NotFoundError(`NO product with id:${productsId}`)
 }

 res.status(StatusCodes.OK).json({product})

}


 const updateProduct=async(req,res)=>{

    const {id:productsId}=req.params

    const product=await Product.findOneAndUpdate({_id:productsId},req.body,{
        new:true,
        runValidators:true,
    })

    if(!product){
        throw new CustomError.NotFoundError(`NO product with id:${productsId}`)
     }
    
     res.status(StatusCodes.OK).json({product})
    
}


 const deleteProduct=async(req,res)=>{

    const {id:productsId}=req.params

    const product= await Product.findOne({_id:productsId})
    if(!product){
        throw new CustomError.NotFoundError(`NO product with id:${productsId}`)
     }
    

    await product.remove()   

    res.status(StatusCodes.OK).json({'msg':'Success! Product removed'})

   
}


 const uploadImage=async(req,res)=>{

    console.log(req.files)
    if(!req.files){
         throw new CustomError.BadRequestError('No FIle Uploaded')
    }

    const productImage=req.files.image

    if(!productImage.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError('Please Upload image')

    }
    const maxSize=1024 * 1024;

    if(productImage.size> maxSize){
        throw new CustomError.BadRequestError('Please Upload image smaller then 1MB')
   
    }

     const imagePath=path.join(__dirname,'../public/uploads/'+`${productImage.name}`)

 await productImage.mv(imagePath)

 res.status(StatusCodes.OK).json({image:`uploads/${productImage.name}`})

    res.send('uploadImage product')
}


module.exports={
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage
}