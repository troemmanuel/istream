const express = require('express')
    //const controller = require('../controllers/fsUserController')
const router = express.Router()


const userAdminControlleur = require('../controllers/fsUserController')
controlleur = new userAdminControlleur()

router.get('/', (req, res) => controlleur.fsUserList(req, res))
    //post
router.post('/save', (req, res) => controlleur.fsUserAdd(req, res))
    //delete
router.get('/delete/:id', (req, res) => controlleur.fsUserDelete(req, res))
    //update
router.get('/edit/:id', (req, res) => controlleur.fsUserEdit(req, res))
router.post('/update', (req, res) => controlleur.fsUserUpdate(req, res))


//Route export
module.exports = router