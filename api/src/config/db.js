
const { Client } = require('pg')

class Database {

    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'ptut-vaccination',
            password: 'bunychou66',
            port: 5432,
        })
        this.client.connect();
    }

    getClient(){
        return this.client;
    }

    disconnect() {
        this.client.end();
    }
}

module.exports = Database;


