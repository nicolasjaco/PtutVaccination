var Database = require('../config/db.js');

module.exports.getAll = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();    
    client.query('SELECT * FROM maladiecalendrier', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

module.exports.getById = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * FROM maladiecalendrier WHERE idmaladie = \''+ req.params.id +'\'', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

module.exports.getForUser = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * from maladiecalendrier, (SELECT CAST (extract(YEAR from AGE(datedenaissance)) * 12 + extract(MONTH from AGE(datedenaissance)) AS INTEGER) as usermonth from users WHERE idutilisateur='+req.params.id+') as kk, maladie where maladie.idmaladie = maladiecalendrier.idmaladie AND calendrier < usermonth' , (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

