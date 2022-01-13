const express = require('express');
const app = express();
const dotenv = require('dotenv').config({path: './config.env'});
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')
const cors = require('cors');

const connectDB = require('./server/database/connection');

const port = process.env.PORT || 5000;

// log request
app.use(morgan('tiny'))

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    next();
})
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

// mogodb connection
connectDB()

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set('view engine',"ejs")
// app.set("views",path.resolve(__dirname,"views"))

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',require('./server/routes/routes'))

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})