const express = require('express')
const route = express.Router()

const servies = require('../services/render')
const controller = require('../controller/controller')
// const fornax = require('../../fornax')

// route.get('/',servies.homeRoutes)


// api

route.post('/api/register',controller.register) 

route.post('/api/login',controller.login)

route.post('/api/update',controller.update)

route.post('/api/transactions',controller.transaction)
route.get('/api/transaction',controller.transactiondata)

route.post('/api/upvote',controller.upvote)

route.post("/api/downvote",controller.downvote)

route.post("/api/state",controller.state)

// route.post('/api/fornax',fornax.fornax)

module.exports = route