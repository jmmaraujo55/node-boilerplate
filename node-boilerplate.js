require('dotenv').config();
const logger = require('./app/services/logger');
const Server = require('./app/server');
const Mongo = require('./app/services/mongoose');

(async function () {
    try {
        const server = new Server();
        const mongo = new Mongo(`mongodb://${process.env.MONGO_HOST}:27017/${process.env.MONGO_SCHEMA}`);

        server.listen();
        await mongo.connect();
    } catch (e) {
        logger.log('error', e);
        process.exit(1);
    }
})();
