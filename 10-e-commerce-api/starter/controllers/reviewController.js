
const CustomError=require("../errors")
const Review=require("../models/Review")
const Product=require("../models/Product")
const {StatusCodes}=require('http-status-codes')
const {checkPermissions}=require('../utils')

const createReview=async (req,res)=>{


const {product:productId}= req.body


const isvalidProduct=await Product.findOne({_id:productId})


if(!isvalidProduct){
    throw new CustomError.NotFoundError(`No product with id:${productId}`)
}


const alreadySubmitted=await Review.findOne({
    product:productId,
    user:req.user.userId
})

if(alreadySubmitted){
    throw new CustomError.BadRequestError('Already submitted review for this product')
}




req.body.user=req.user.userId
const review= await Review.create(req.body)

res.status(StatusCodes.CREATED).json({review})



}

const getAllReviews=async(req,res)=>{

  const review= await Review.find({}).populate({
    path:'product',
    select:'name category company'
  }).populate({
    path:'user',
    select:'name'
  })

    res.status(StatusCodes.OK).json({review,count:review.length})
}

const getSingleReview=async (req,res)=>{

    const reviewId=req.params.id

 

    const review= await Review.findOne({_id:reviewId})

    
    if(!review){
        throw new CustomError.NotFoundError(`No review found with id${reviewId}`)
    }

    
    res.status(StatusCodes.OK).json(review)


}

const updateReview=async(req,res)=>{

    const reviewId=req.params.id
    const {rating,title,comment}=req.body

    const review= await Review.findOne({_id:reviewId})

    if(!review){
        throw new CustomError.NotFoundError(`No review found with id${reviewId}`)
    }

    checkPermissions(req.user,review.user)
  
     review.rating=rating
     review.title=title
     review.comment=comment       
     
     await review.save()

     res.status(StatusCodes.OK).json(review)

}

const deleteReview=async(req,res)=>{

    const reviewId=req.params.id
    const review= await Review.findOne({_id:reviewId})

    if(!review){
        throw new CustomError.NotFoundError(`No review found with id${reviewId}`)
    }
 
    checkPermissions(req.user,review.user)

    await review.remove()

    res.status(StatusCodes.OK).json({"msg":"Success ! Message Removed"})

}

const getSingleProductReviews=async(req,res)=>{

     const {id:productId}=req.params

     const reviews=await Review.find({product:productId})
 
     res.status(StatusCodes.OK).json({reviews,count:reviews.length})


    
}


module.exports={
    createReview,getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    getSingleProductReviews
}