const express=require('express')
const {authenticateUser,authorizePermissions}=require('../middleware/authentication')
const{
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
} = require('../controllers/userController')

const router=express.Router()

router.route('/').get(authenticateUser,authorizePermissions('admin'),getAllUsers);


router.route('/showMe').get(authenticateUser,showCurrentUser)
router.route('/updateUser').patch(authenticateUser,updateUser)
router.route('/updateUserPassword').patch(authenticateUser,updateUserPassword)
router.route('/:id').get(authenticateUser,getSingleUser);



module.exports=router