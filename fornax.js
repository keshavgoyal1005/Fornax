const SHA256 = require("crypto-js/sha256");
class BlockCrypto {
  constructor(index, info, nextHash = " ") {
    this.index = index;
    this.current_time = Date.now();
    this.info = info;
    this.nextHash = nextHash;
    this.hash = this.computeHash();
     }

  computeHash() {
    return SHA256(
      this.index +
        this.nextHash +
        this.current_time +
        JSON.stringify(this.info)
          ).toString();
  }
}

class Blockchain {
  constructor() {
    this.block1chain = [this.initGenesisBlock()];
    this.difficulty = 4;
  }
  initGenesisBlock() {
    return new BlockCrypto(0, "06/04/2021", "Initial Block in our network", "0");
  }

  obtainLatestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.nextHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
        this.block1chain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.block1chain.length; i++) {
      const currentBlock = this.block1chain[i];
      const nextHash = this.block1chain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.nextHash !== nextHash.hash) return false;
    }
    return true;
  }
}


// module.exports = Blockchain
// module.exports = BlockCrypto

// let fornax = new Blockchain();

// console.log("fornax mining progressing....");
// fornax.addNewBlock(
//   new BlockCrypto(1, {
//     sender: "Rabin Yitzack",
//     recipient: "Loyd Eve",
//     quantity: 20
//   })
// );

exports.fornax = async (req,res)=>{
  console.log(req.body)
  const {username,location,tag,description,downvote,upvote,status} = req.body
  let blockchain = new Blockchain()
  blockchain.addNewBlock(
    new BlockCrypto(1,{
      sender: username,
      recipient: "ajeet",
      quantity: 20
    })
  )

  console.log(JSON.stringify(blockchain,true,3))
}




// console.log(JSON.stringify(fornax.block1chain[0],true,3));