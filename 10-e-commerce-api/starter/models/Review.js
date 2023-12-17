const moongoose=require('mongoose')

const ReviewSchema= new moongoose.Schema({

  rating:{
    type:Number,
    min:1,
    max:5,
    require:[true,'Please provide rating']
  },
  title:{
     type:String,
     trim:true,
     require:[true,'Please provide review title'],
     maxLength:100
  },
  comment:{
      type:String,
      require:[true,'Please provide comment '],
    },
  user:{
     type:moongoose.Types.ObjectId,
     ref:"User",
    require:true
    },
  product:{
      type:moongoose.Types.ObjectId,
      ref:'Product',
      require:true,
    }

},{
  timestamps:true
})

ReviewSchema.index({product:1,user:1},{unique:true})

ReviewSchema.statics.calculateAverageRating=async function(productId){

 const result= await this.aggregate([
  {
    $match:{product:productId}
  },
  {
    $group:{
       _id:null,
       averageRating:{$avg:'$rating'},
       numOfReviews:{$sum:1}
    }
  }

 ])

try{
  await this.model('Product').findOneAndUpdate({_id:productId},{
    averageRating:Math.ceil(result[0]?.averageRating || 0),
    numOfReviews:result[0]?.numOfReviews || 0
  })

}
catch(errors){
 console.log(errors);
}


}


ReviewSchema.post('save',async function(){
 
  await this.constructor.calculateAverageRating(this.product)

  console.log('post save hook called'); 
})

ReviewSchema.post('remove',async function(){

  await this.constructor.calculateAverageRating(this.product)

})

module.exports=moongoose.model('Review',ReviewSchema)