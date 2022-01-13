const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true,
        unique: true
    },
    address: {
        type:String,
        required : true
    },
    phone: {
        type:String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required : true
    },
})

userSchema.pre('save',async function(next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password,12)
    }
    next()
})

const usreDb = mongoose.model('userDb',userSchema)

module.exports = usreDb