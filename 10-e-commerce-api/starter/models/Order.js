const moongose= require('mongoose')
const User=require('../models/User')

const singleCartItemsSchema=moongose.Schema({
     name:{type:String,require:true},
     image:{type:String,require:true},
     price:{type:Number,require:true},
     amount:{type:Number,require:true},
     product:{
        type:moongose.Types.ObjectId,
        ref:"Product",
        require:true
     }
})



const OrderSchema= new moongose.Schema({
  tax:{
    type:Number,
    require:true
  },
  shippingFee:{
     type:Number,
     require:true
  },
  subtotal:{
     type:Number,
     require:true
  } ,
  total:{
    type:Number,
    require:true
  },
  orderItems:[singleCartItemsSchema],
  status:{
    type:String,
    enum:['pending','failed','paid','delivered','canceled'],
    default:'pending'
  },
  user:{
  type:moongose.Types.ObjectId,
   ref:"User",
   require:true
  },
  clientSecret:{
    type:String,
    require:true
  },  
  paymentIntentId:{
     type:String,
     require:true
  }

},{
    timestamps:true
})

module.exports= moongose.model('Order',OrderSchema)