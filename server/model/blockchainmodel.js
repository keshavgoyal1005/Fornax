const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// create the blockchain schema

const Blockchainschema = new Schema({
    index:{
        type: Schema.Types.Number,
        required: true,
    },
    timestamp: {
        required: true,
        type: Schema.Types.Date,
        default: Date.now()
    },
    transactions : {
        required:true,
        type: Schema.Types.Array
    },
    prevHash: {
        required:false,
        type: Schema.Types.String
    },
    hash:{
        required: true,
        type: Schema.Types.String
    }
})


const BlockchainDb = mongoose.model("BlockChain",Blockchainschema)

module.exports = BlockchainDb

// username, location , tag , discription, upvote, img, downvote, status, 