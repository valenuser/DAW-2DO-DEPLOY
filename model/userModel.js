const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    name:{type:String},
    edad:{type:Number}
})


const userModel = model('users',userSchema)


module.exports = {userModel}