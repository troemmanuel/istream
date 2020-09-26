//Creation de node app express
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const connexion = require('./models/dataBase');

//Application express
const app = express()

// fonction importer
const routerFsUser = require('./routers/fsUser');
const routerIndex = require('./routers/index')


// parametrage du moteur de template ejs
app.set('views', 'frontend/views');
app.set('view engine', 'ejs');

// Corps de l'application
app.use(bodyParser.json()); // API response en JSON
app.use(
    // donnée en get post non encodé par l'URL
    bodyParser.urlencoded({
        extended: true
    })
);
app.use('/fsUser/', routerFsUser)
app.use('./routers/index.js', routerIndex)





module.exports = app