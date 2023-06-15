const path=require('path')
const {StatusCodes}=require('http-status-codes')
const CustomError=require('../errors')

const uploadProductImage=async(req,res)=>{


 if(!req.files){
     throw new CustomError.BadRequestError('No file uploaded')
 }
const productImage=req.files.image 

if(!productImage.mimetype.startsWith('image')){
 throw new CustomError.BadRequestError('please upload image')
}
const maxSize=1000
if(productImage.size>maxSize){
     throw new CustomError.BadRequestError('please upload image smaller then 1Kb')
}



const imagepath=path.join(__dirname,'../public/uploads/' + `${productImage.name}`)


await productImage.mv(imagepath)
return res
 .status(StatusCodes.OK).json({
    image:{src:`/uploads/${productImage.name}`}
})

}

module.exports={
    uploadProductImage
}
