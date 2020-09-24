const connexion = require('../models/dataBase')
    /* // routes pour recuperer les donnée de la bD
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

    // Envoyer des donnée dans la db

    /* app.post('/save', (req, res) => {
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
    }); */