


const getAllUsers=async(req,res)=>{

    res.send('all user')
}


const getSingleUser=async (req,res)=>{
    res.send('single user')
}

const showCurrentUser= async (req,res)=>{
     res.send('current user')
}

const updateUser=async(req,res)=>{
     res.send('updare user')
}

const updateUserPassword=async(req,res)=>{
    res.send('update user password')
}

module.exports={
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}