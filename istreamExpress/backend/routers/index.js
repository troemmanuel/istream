const express = require('express')
const router = express.Router()
const app = require('../app')
const connexion = require('../models/dataBase')

// Routes pour se connecter a la page index;
router.get('/', (req, res) => {
        res.render('index')
    })
    // Routes pour envoyer la reponses du server sur la console
router.use((req, res, next) => {
    console.log("requete envoyé");
    next();
})



module.exports = router;