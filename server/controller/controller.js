const usreDb = require('../model/usersmodel')
const BlockchainDb = require('../model/blockchainmodel')
const bcrypt = require('bcrypt');
const { json } = require('body-parser');

let { Blockchain } = require('../blockchain/blockchain')

let blockchain = new Blockchain();
let hash = require('object-hash')

let PROOF = 150;


exports.register = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new user
    console.log(req.body)
    const user = new usreDb({
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password,
        city: req.body.city
    })

    // save
    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occured while register" })
    });
}

exports.login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send({ message: "Content can not be empty" })
    }

    const userExist = await usreDb.findOne({ email: email })

    console.log(userExist)

    if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password)
        if (isMatch) {
            // const results = await userExist.save()
            res.status(200).send({ message: "Login Successfuly" })
        } else {
            res.status(400).send({ message: "Someting went wrong!" })
        }
    } else {
        res.status(400).send({ message: "User not found!" })
    }

}

exports.update = async (req, res) => {

    const { username, email, phone, address, city } = req.body

    if (username && email && phone && address && city) {

        const userExist = await usreDb.findOne({ email: email })
        if (userExist) {
            const update = await usreDb.updateOne(
                { email: email },
                {
                    username, phone, address, city
                }
            )
            res.status(200).send({ message: "Your details updated" })
        } else {
            res.status(400).send({ message: "Someting went wrong! Try again" })
        }

    } else {
        res.status(400).send({ message: "Content can not be empty" })
    }

}






// if(proofOfWork() == PROOF){
//     blockchain.addNewTransaction("akk","ajj",200);
//     let prevHash = blockchain.lastBlock() ? blockchain.lastBlock.hash : null;
//     blockchain.addNewBlock(prevHash)
// }


exports.transaction = async (req, res) => {
    const { username, tag, description, state, img, location } = req.body
    console.log(req.body)

    
        const upvote = [username]
        const downvote = []
        blockchain.addNewTransaction(username, tag, description, upvote, downvote, state, img, location);
        let prevHash = blockchain.lastBlock() ? blockchain.lastBlock.hash : null;
        blockchain.addNewBlock(prevHash)
        res.status(200).send({ message: "block is add" })
        // res.status(200).send({ message: "Downvote done" })
}

exports.transactiondata = async (req, res) => {
    const db = await BlockchainDb.find({})
    // blockchain.chain.push(db)
    for (let i = 0; i < db.length; i++) {
        const element = db[i];
        // console.log(element.transactions[0].sender)
        blockchain.chain.push(element)
    }
    res.status(200).send(blockchain)
}

exports.upvote = async (req, res) => {
    const { username, index } = req.body
    if (username && index) {
        const db = await BlockchainDb.findOne({ index: index })
        console.log(db.transactions, db.transactions[0].username)

        const upvote = []

        for (let i = 0; i < db.transactions[0].upvote.length; i++) {
            const element = db.transactions[0].upvote[i];
            upvote.push(element)
        }
        upvote.push(username)

        // const upvote = [db.transactions[0].username,username]

        blockchain.addNewTransaction(db.transactions[0].username, db.transactions[0].tag, db.transactions[0].description, upvote, db.transactions[0].downvote, db.transactions[0].state, db.transactions[0].img, db.transactions[0].location)
        blockchain.addNewBlock()
        res.status(200).send({ message: "Downvote done" })
    } else {
        res.status(400).send({ message: "something went wrong" })
    }
}


exports.downvote = async (req, res) => {
    const { username, index } = req.body
    if (username && index) {
        const db = await BlockchainDb.findOne({ index: index })
        // console.log(db.transactions, db.transactions[0].username)

        const downvote = []

        for (let i = 0; i < db.transactions[0].upvote.length; i++) {
            const element = db.transactions[0].upvote[i];
            downvote.push(element)
        }
        downvote.push(username)
        // const upvote = [db.transactions[0].username,username]

        blockchain.addNewTransaction(db.transactions[0].username, db.transactions[0].tag, db.transactions[0].description, db.transactions[0].upvote, downvote, db.transactions[0].state, db.transactions[0].img, db.transactions[0].location)
        blockchain.addNewBlock()
        res.status(200).send({ message: "Downvote done" })
    } else {
        res.status(400).send({ message: "something went wrong" })
    }
}

exports.state = async (req, res) => {
    const { username, index } = req.body;

    if (username && index) {
        const db = await BlockchainDb.findOne({ index: index })

        if (db.transactions[0].username == username) {
            const state = true;
            blockchain.addNewTransaction(db.transactions[0].username, db.transactions[0].tag, db.transactions[0].description, db.transactions[0].upvote, db.transactions[0].downvote, state, db.transactions[0].img, db.transactions[0].location)
            blockchain.addNewBlock()
            res.status(200).send({ message: "Change the state of problem" })
        }
    }


}