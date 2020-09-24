//Creation de node app express
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const connexion = require('./models/dataBase');

// fonction importer

//Application express
const app = express()
app.use(bodyParser.json()); // API response en JSON
app.use(
    // donnée en get post non encodé par l'URL
    bodyParser.urlencoded({
        extended: true
    })
);

// parametrage des outils
app.set('views', 'frontend/views');
app.set('view engine', 'ejs');


// Definition des routes

// routes pour recuperer les donnée de la bD
app.get('/', (req, res, next) => {
    //res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM fs_user";
    let query = connexion.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('fsUserAdministration', {
            fs_user: rows
        })
    });
});
// routes pour envoyé les donnée dans la BD
app.get('/addUser', (req, res) => {
    res.render('addUser')
});

app.post('/save', (req, res) => {

    let data = {
        _USER_LEGAL_NAME_: req.body._USER_LEGAL_NAME_,
        //USER_DEPARTEMENT: req.body.USER_DEPARTEMENT,
        USER_ACTIVE: req.body.USER_ACTIVE,
        USER_REASON: req.body.USER_REASON,
        _USER_USERNAME: req.body._USER_USERNAME,
        USER_TYPE: req.body.USER_TYPE,
        ___USER_PASSWORD: req.body.___USER_PASSWORD
    };
    let sql = "INSERT INTO fs_user SET ?";
    let query = connexion.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/')
    });
});
// le corps de l'application

app.use((req, res, next) => {
    console.log("requete envoyé");
    next();
})



module.exports = app