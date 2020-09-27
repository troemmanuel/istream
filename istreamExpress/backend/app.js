const express = require("express")
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')

//logiciel Express
const app = express()

//importing route
const userAdminRoutes = require('./routers/fsUser')
const { urlencoded } = require("body-parser")

// Setting
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/views'))



// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userAdminRoutes);

// static files
app.use(express.static(path.join(__dirname, '../frontend/public')))

// Module export
module.exports = app