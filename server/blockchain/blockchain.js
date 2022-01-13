let hash = require('object-hash')
const validator = require('./validator')

const TARGET_HASH = hash(150);
// const BlockchainDb = require('../model/blockchainmodel')
const mongoose = require('mongoose');
const { pin } = require('nodemon/lib/version');
const { type } = require('express/lib/response');
const res = require('express/lib/response');
let blockchainmodel = mongoose.model("BlockChain")


class Blockchain {

    constructor() {

        // create
        this.chain = [];
        // transaction
        this.curr_transaction = [];
    }

    getLastBlock(callback) {
        // get last block from Db
        return blockchainmodel.findOne({},null,{
            sort: {
                _id : -1
            }
        },(err, block)=>{
            if (err) {
                return console.error("Cannot find last Block")
            }
            return callback(block)
        })
    }


    
    addNewBlock(prevHash) {
        let block = {
            timestamp: Date.now(),
            transactions: this.curr_transaction,
            prevHash: prevHash
        };
        // validation
        if (validator.proofOfWork() == TARGET_HASH) {
            block.hash = hash(block)
            this.getLastBlock((lastblock) => {
                if (lastblock) {
                    // console.log(lastblock.index,this.getChain())
                    block.index = lastblock.index +1
                    block.prevHash = lastblock.hash
                    block.code =200
                }

                const newBlock = new blockchainmodel(block)
                // console.log(block, newBlock)
                // console.log(tindex,tindex+1)
                newBlock.save((err) => {
                    if (err) {
                        return console.log("Cannnot save Block to Db ", err.message)
                    }
                    console.log("Block saved on the Db")
                })
                
                // add to chain
                this.chain.push(block);
                this.curr_transaction = [];
                // console.log(chain)
                return block;
            })

        // console.log(block,"line 72")
        return 0
        }

    }

    addNewTransaction(username, tag, description,upvote,downvote,state,img,location) {
        this.curr_transaction.push({ username, tag, description,upvote,downvote,state,img,location })
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }

}

module.exports = {Blockchain};