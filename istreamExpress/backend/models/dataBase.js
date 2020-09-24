const mysql = require('mysql');
// creation de la base de donnée Mysql
const connexion = mysql.createConnection({
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: '',
        database: 'dataBase'
    })
    // connexion de la base de donnée
connexion.connect(error => {
    if (!!error) console.log(error);
    else console.log('Database Connected!');
});
module.exports = connexion;