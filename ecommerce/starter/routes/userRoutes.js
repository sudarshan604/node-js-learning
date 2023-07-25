const express=require('express')
const {getAllUsers,getSingleUser,updateUser,updateUserPassword,
showCurrentUser
}=require('../controllers/userController')


const router=express.Router()


router.route('/').get(getAllUsers)
router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').patch(updateUser)
router.route('/updateUserpassword').patch(updateUserPassword)

router.route('/:id').get(getSingleUser)



module.exports=router