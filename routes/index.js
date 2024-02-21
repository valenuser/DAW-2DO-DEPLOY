const express = require('express')

const router = express.Router()

const {findUsers,createUser,updateUser,deleteUser,findUser} = require('../services/userService')

router.get('/',async(req,res)=>{

    const users = await findUsers()

    res.status(200).json(users)

})

router.get('/:name',async(req,res)=>{
    try{
        const { name } = req.params 

        const user = await findUser(name)

        if( user.length != 0){
            res.status(200).json(user)
        }else{
            res.status(404).json({msg:'usuario no encontrado'})
        }
    
    }catch(e){
        res.status(404).json({msg:'usuario no encontrado'})
    }
})

router.post('/create',async(req,res)=>{

    try{
        const { name, edad } = req.body

        const data = {name:name,edad:edad}
    
        await createUser(data)
    
    
        res.status(200).json({msg:'Usuario creado con exito'})
    }catch(e){
        res.status(404).json({msg:e})
    }
})


router.put('/update',async(req,res)=>{

    try{
        const { name, edad } = req.body

            
        const newData = {
            name:name,
            edad:edad
        }
        
        await updateUser(newData)

        res.status(200).json({msg:'Usuario actualizado con exito'})
    }catch(e){
        res.status(404).json({msg:e})
    }
})


router.delete('/delete',async(req,res)=>{
    try{
        const { name } = req.body

                    
        await deleteUser(name)

        res.status(200).json({msg:'Usuario eliminado con exito'})
    }catch(e){
        res.status(404).json({msg:e})
    }
})


router.use((req,res)=>{
    res.status(404).json({'msg':'Esta ruta no esta permitida'})
})

module.exports = router