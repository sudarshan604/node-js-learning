const {
    createOrder,
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    updateOrder
}=require('../controllers/orderController')

const {authenticateUser,authorizePermissions}=require('../middleware/authentication')

const express=require('express')

const router=express.Router()


router.route('/').get(authenticateUser,authorizePermissions('admin') ,getAllOrders)
 .post(authenticateUser,createOrder)
  


module.exports=router