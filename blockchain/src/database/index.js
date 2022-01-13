const mongoose = require('mongoose')

const blockChainModel = require('./model')

mongoose.connect('mongodb+srv://fornax:fornax@cluster0.tdxid.mongodb.net/test?retryWrites=true&w=majority',(err)=>{
    if(err) return console.log("Cannot connect to Db");
    console.log("Database is connected");
    connnectionCallback();
})


let connnectionCallback = ()=>{}

module.exports.onConnect = (callback)=>{
    connnectionCallback = callback;
}
