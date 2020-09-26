const express = require('express');
const router = express.Router();
const connexion = require('../models/dataBase')

// Routes pour acceder a la page addUser
router.get('/addUser', (req, res) => {
    res.render('addUser')
});
// routes pour recuperer les utilisateur de la bD pour les afficher dans le tabbleau
router.get('/', (req, res, next) => {
    //res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM fs_user";
    let query = connexion.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('fsUserAdministration', {
            fs_user: rows
        })
    });
});

// Routes pour inserer des donnée dans la Bd depuis la page UserAdmin
router.post('/save', (req, res) => {
    let data = {
        _USER_LEGAL_NAME_: req.body._USER_LEGAL_NAME_,
        USER_DEPARTEMENT: req.body.USER_DEPARTEMENT,
        USER_ACTIVE: req.body.USER_ACTIVE,
        USER_REASON: req.body.USER_REASON,
        _USER_USERNAME: req.body._USER_USERNAME,
        USER_TYPE: req.body.USER_TYPE,
        ___USER_PASSWORD: req.body.___USER_PASSWORD
    };
    let sql = "INSERT INTO fs_user SET ?";
    let query = connection.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Module exportation
module.exports = router