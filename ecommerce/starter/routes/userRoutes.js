const express=require('express')
const {getAllUsers,getSingleUser,updateUser,updateUserPassword,
    showCurrentUser
}=require('../controllers/userController')

const {authenticateUser,authorizePermission}=require('../middleware/authentication')

const router=express.Router()


router.route('/').get(authenticateUser,authorizePermission('admin','user'),getAllUsers)
router.route('/showMe').get(authenticateUser,showCurrentUser)
router.route('/updateUser').patch(updateUser)
router.route('/updateUserpassword').patch(authenticateUser,updateUserPassword)

router.route('/:id').get(getSingleUser)



module.exports=router