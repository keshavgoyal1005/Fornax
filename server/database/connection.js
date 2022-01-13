const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected : ${conn.connection.host} `)
    }catch(err){
        console.log(err,"in connection with mongodb")
    }
}

module.exports = connectDB