
var Database = require('../config/db.js');

module.exports.getAll = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * FROM users', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

module.exports.getById = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * FROM users WHERE IDUTILISATEUR = \''+ req.params.id +'\'', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

module.exports.create = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('INSERT INTO users VALUES ('+ req.body.id +', \''+ req.body.mail +'\', \''+ req.body.password +'\');', (err, resultats) => {
        console.log("err", err);
        res.status(200).json(resultats);
        connexion.disconnect();
    });
};


module.exports.deleteById = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('DELETE FROM users WHERE idutilisateur = \''+ req.params.id +'\'', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

