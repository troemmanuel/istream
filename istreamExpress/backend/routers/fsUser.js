const express = require('express')
    //const controller = require('../controllers/fsUserController')
const router = express.Router()


const userAdminControlleur = require('../controllers/fsUserController')
controlleur = new userAdminControlleur()

router.get('/', (req, res) => controlleur.fsUserAdminDisplay(req, res))
router.post('/save', (req, res) => controlleur.insertDataInFsuserTable(req, res))


//Route export
module.exports = router