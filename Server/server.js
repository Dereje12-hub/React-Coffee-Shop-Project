const express = require('express')

//connecting our app with the mongodb
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,() => console.log("Database connected!"))

app.use(express.json())   //we have activated body parser 
//app.use(express.urlencoded({extended:false}))   //making available

app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))