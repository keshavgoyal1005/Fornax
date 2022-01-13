const TRAGET_Hash = 150;
const hash = require("object-hash")

module.exports.validProof = (proof)=>{
    const guesshash = hash(proof);
    console.log("Hashing : ",guesshash);
    return guesshash == hash(TRAGET_Hash);
}


module.exports.proofOfWork = ()=>{
    let proof =0;
    while(true){
        if(!module.exports.validProof(proof)){
            proof++;
        }else{
            break;
        }
    }
    return hash(proof);
}