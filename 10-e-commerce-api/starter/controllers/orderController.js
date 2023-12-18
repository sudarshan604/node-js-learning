
const CustomError=require("../errors")
const Order=require("../models/Order")
const Product=require("../models/Product")
const {StatusCodes}=require('http-status-codes')
const {checkPermissions}=require('../utils')


const fakeStripeAPi=async({amount,currency})=>{
    
    const client_secret= 'someRandomvalue'
    return {client_secret,amount}

}

const createOrder=async(req,res)=>{

    const {items:cartItems,tax,shippingFee}=req.body
   
    if(!cartItems || cartItems.length < 1){
         throw new CustomError.BadRequestError('No card items provided')
    }

if(!tax || !shippingFee){
    throw new CustomError.BadRequestError('please provide tax and shipping fee')
}

let orderItems=[];
let subtotal=0




for(const item of cartItems){
   const dbProduct=await Product.findOne({_id:item.product})

  if(!dbProduct){
    throw new CustomError.NotFoundError(`No product with id:${item.product}`)

  }

const {name,price,image,_id}=dbProduct
const singleOrderItem={
     amount:item.amount,
     name,price,image,
     product:_id
}
//add item to order
orderItems=[...orderItems,singleOrderItem]
//calculate subtota
subtotal += item.amount * price
}
//calculate total
const total=tax + shippingFee + subtotal
//get client secret

const paymentIntent= await fakeStripeAPi({
     amount:total,
     currency:'usd'
})

const order=await Order.create({
 orderItems,total,subtotal,tax,shippingFee,clientSecret:paymentIntent.client_secret,user:req.user.userId

})

res.status(StatusCodes.CREATED).json({order,clientSecret:order.clientSecret})

}

const getAllOrders=async(req,res)=>{

    const allOrder= await Order.find({})

    res.status(StatusCodes.OK).json({allOrder})
    
}

const getSingleOrder=async(req,res)=>{

    const {id:orderId}=req.params

    const order= await Order.findOne({_id:orderId})

    if(!order){
         throw new CustomError.NotFoundError(`No Order with id :${orderId}`)
    }

    checkPermissions(req.user,order.user)

    res.status(StatusCodes.OK).json({order})
}

const getCurrentUserOrders=async(req,res)=>{

  const orders= await Order.find({user:req.user.userId})

    res.status(StatusCodes.OK).json({orders,count:orders.length})
}

const updateOrder=async(req,res)=>{

    const {id:orderId}=req.params
    const {paymentIntentId}=req.body
    const order= await Order.findOne({_id:orderId})

    if(!order){
         throw new CustomError.NotFoundError(`No Order with id :${orderId}`)
    }

    checkPermissions(req.user,order.user)
     
    order.paymentIntentId=paymentIntentId
    order.status='paid',
    await order.save()

    res.status(StatusCodes.OK).json({order,count:order.length})

}

module.exports={
    createOrder,
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    updateOrder
}