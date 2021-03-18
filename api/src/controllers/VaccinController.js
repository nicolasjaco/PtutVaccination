
var Database = require('../config/db.js');

module.exports.getAll = function (req, res) {
    let connexion = new Database();
    let client = connexion.getClient();
    client.query('SELECT * FROM vaccin', (err, resultats) => {
        res.status(200).json(resultats.rows);
        connexion.disconnect();
    });
};

