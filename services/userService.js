const { userModel } = require('../model/userModel')

const findUsers = async() =>{
    const users = await userModel.find()

    return users
}

const findUser = async(data) =>{
    const users = await userModel.find({name:data})

    return users
}


const createUser = async(data) =>{
    const newUser = new userModel({name:data.name,edad:data.edad})

    await newUser.save()
}


const updateUser = async(data) =>{


    await userModel.updateOne({name:data.name},{name:data.name,edad:data.edad})
}

const deleteUser =  async(data) =>{

    await userModel.deleteOne({name:data})
}



module.exports = {findUsers,createUser,updateUser,deleteUser,findUser}