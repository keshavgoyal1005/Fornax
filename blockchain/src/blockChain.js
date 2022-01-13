const hash = require('object-hash')
const TRAGET_Hash = hash(150)

const validator = require('./validator');
const mongoose = require('mongoose');

const blockChainModel = mongoose.model("BlockChain");

class BlockChain{
    constructor(){
        // create
        this.chain = [];
        // transaction
        this.curr_transactions = [];
    }

    getLastBlock(callback){
        // get last block from Db
        return blockChainModel.findOne({})
    }

    addNewBlock(prevHash){
        let block ={
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevHash
        };

        if(validator.proofOfWork() == TRAGET_Hash){
            block.hash = hash(block);

            const newBlock = new blockChainModel(block);

            newBlock.save((err)=>{
                if(err) return console.log("Cannot save Block to Db ",err.message);
                console.log("Block Saved on the Db");
                this.chain.push(block);
                this.curr_transactions = [];
                return block;
            })
        }
    }

    addNewTransaction(sender, recipient, amount) {
        this.curr_transactions.push({ sender, recipient, amount })
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;