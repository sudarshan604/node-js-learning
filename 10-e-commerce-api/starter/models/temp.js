[
    {
      '$match': {
        'product': new ObjectId('657f1106210798e9c7932dbb')
      }
    }, {
      '$group': {
        '_id': null, 
        'averageRating': {
          '$avg': '$rating'
        }, 
        'numberOfReviews': {
          '$sum': 1
        }
      }
    }
  ]