// let Blockchain = require('./blockchain')

// let blockchain = new Blockchain();
let hash = require('object-hash')

let PROOF = 150;

module.exports.validProof = (proof)=>{
    let guesshash = hash(proof)
    console.log("Hashing : ",guesshash)
    return guesshash == hash(PROOF);
}

module.exports.proofOfWork = ()=>{
    let proof = 0;
    while(true){
        if (!module.exports.validProof(proof)) {
            proof++;
        }else{
            break;
        }
    }
    return hash(proof);
}

// if(proofOfWork() == PROOF){
//     blockchain.addNewTransaction("akk","ajj",200);
//     let prevHash = blockchain.lastBlock() ? blockchain.lastBlock.hash : null;
//     blockchain.addNewBlock(prevHash)
// }

// console.log("blockchain : " ,blockchain)
// console.log("chain : " ,blockchain.chain)
