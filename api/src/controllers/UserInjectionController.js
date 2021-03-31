var Database = require('../config/db.js');

module.exports.getAll = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * FROM injectionUtilisateur', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};
module.exports.create = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('INSERT INTO injectionUtilisateur VALUES ('+ req.body.idInjection +', \''+ req.body.idUtilisateur +'\', \''+ req.body.date +'\', \''+ req.body.numero_lot +'\');', (err, resultats) => {
        console.log("err", err);
        res.status(200).json(resultats);
        connexion.disconnect();
    });
};

module.exports.deleteById = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('DELETE FROM injectionUtilisateur WHERE idInjection = \''+ req.params.id +'\'', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};