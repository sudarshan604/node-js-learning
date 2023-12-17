

const createOrder=async(req,res)=>{

    res.send('create orders')
}

const getAllOrders=async(req,res)=>{

    res.send('all orders')
}

const getSingleOrder=async(req,res)=>{

    res.send('single orders')
}

const getCurrentUserOrders=async(req,res)=>{

    res.send('current orders')
}

const updateOrder=async(req,res)=>{

    res.send('update orders')
}

module.exports={
    createOrder,
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    updateOrder
}