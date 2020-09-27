const connexion = require('../models/dataBase')

/*  UserAdminClass */

class userAdminControlleur {

    /* /**
     * Page of UserAdministration
     * @param {*} req
     * @param {*} res
     */
    //Afficher
    fsUserAdminDisplay = (req, res) => {

        let sql = "SELECT * FROM fs_user";
        let query = connexion.query(sql, (err, rows) => {
            if (err) throw err;
            res.render('configurator/administrator/fsUserAdmin', {
                fs_user: rows
            })
        });

    }

    // Insert datta in fs user table 
    insertDataInFsuserTable = (req, res) => {

        let data = {
            _USER_LEGAL_NAME_: req.body.legalName,
            USER_DEPARTEMENT: req.body.departement,
            USER_ACTIVE: req.body.active,
            USER_REASON: req.body.reason,
            _USER_USERNAME: req.body.userName,
            USER_TYPE: req.body.userType,
            ___USER_PASSWORD: req.body.password
        };
        let sql = "INSERT INTO fs_user SET ?";
        let query = connexion.query(sql, data, (err, results) => {
            if (err) throw err;
            res.redirect('/')
        });
    }
}
// Export controllers
module.exports = userAdminControlleur