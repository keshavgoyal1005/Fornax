

const database = require('./src/database')

database.onConnect(() => {
    let BlockChain = require('./src/blockChain')
    let blockChain = new BlockChain();
    const hash = require('object-hash');
    const PROOF = 150;

    blockChain.addNewTransaction("amool","ajeet",200)
    blockChain.addNewBlock(null);

    console.log(blockChain.chain)

})

