
const mongoose=require('mongoose')


const ProductSchema= new mongoose.Schema({

   name:{
    type:String,
    trim:true,
    required:[true,'please provide product name'],
    maxLength:[100,'name cannot be  more then hundred character']
   },
   price:{
    type:Number,
    required:[true,'please provide product price'],
    default:0  
},
   description:{
    type:String,
    required:[true,'please provide description'],
    maxLength:[1000,'description cannot be  more then 1000 character']
},

   image:{
    type:String,
    default:'/uploads/example.jpeg',
   },

   category:{
    type:String, 
    required:[true,'please provide category'],
    enum:['office','kitchen','bedroom']
   
},
  company:{
    type:String, 
    required:[true,'please provide company'],
    enum:{
        values:['ikea','liddy','marcos'],
        message:'{VALUE} is not supported'
    }
},

colors:{
    type:[String], 
    required:true,
    default:['#222']  

},

featured:{
    type:Boolean,
     default:false  
},
freeShipping:{
    type:Boolean,
    default:false
},
inventory:{
    type:Number,
    require:true,
    default:15
   },
averageRating:{
    type:Number,
    default:0
   },
 user:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    require:true
   }
},
{timestamps:true}

)

module.exports=mongoose.model('Product',ProductSchema)