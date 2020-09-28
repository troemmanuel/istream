const connexion = require('../models/dataBase')

/*  UserAdminClass */

class userAdminControlleur {

    /* /**
     * Page of UserAdministration
     * @param {*} req
     * @param {*} res
     */
    //Afficher
    fsUserList = (req, res) => {

        let sql = "SELECT * FROM fs_user";
        let query = connexion.query(sql, (err, rows) => {
            if (err) throw err;
            res.render('configurator/administrator/fsUserAdmin', {
                fs_user: rows
            })
        });

    }

    // Insert datta in fs user table 
    fsUserAdd = (req, res) => {

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
    fsUserDelete = (req, res) => {

            const id = req.params.id;
            let sql = `DELETE from fs_user where USER_ID = ${id}`;
            let query = connexion.query(sql, (err, result) => {
                if (err) throw err;
                res.redirect('/');

            })
        }
        // Update data function
    fsUserEdit = (req, res) => {

        const id = req.params.id;
        let sql = `SELECT * FROM fs_user WHERE USER_ID = ${id}`;
        let query = connexion.query(sql, (err, result) => {
            if (err) throw err;
            res.render('configurator/administrator/fsUserEdit', {
                user: result[0]
            })

        })
    }
    fsUserUpdate = (req, res) => {

        /*   let data = {
            _USER_LEGAL_NAME_: req.body.legalName,
            USER_DEPARTEMENT: req.body.departement,
            USER_ACTIVE: req.body.active,
            USER_REASON: req.body.reason,
            _USER_USERNAME: req.body.userName,
            USER_TYPE: req.body.userType,
            ___USER_PASSWORD: req.body.password
        };
 */


        //const { id } = req.params
        //const data = req.body
        let sql = "UPDATE fs_user SET _USER_LEGAL_NAME_='" + req.body.legalName + "', USER_DEPARTEMENT='" + req.body.departement + "',  USER_ACTIVE='" + req.body.active + "', _USER_USERNAME='" + req.body.userName + "',  USER_REASON='" + req.body.reason + "',\
         USER_TYPE='" + req.body.userType + "', ___USER_PASSWORD ='" + req.body.password + "' where USER_ID =" + req.body.id;
        //let sql = 'UPDATE fs_user set ? where USER_ID = ?' + id
        let query = connexion.query(sql, (err, results) => {
            if (err) throw err;
            res.redirect('/');
        });

    }


}
// Export controllers
module.exports = userAdminControlleur