const mongoose = require('mongoose');
const logger = require('../logger');

class Mongo {
    constructor(url) {
        this.url = url;
        this.options = {
            useNewUrlParser: true,
            connectTimeoutMS: 3000000,
            socketTimeoutMS: 3000000,
            useUnifiedTopology: true
        };

        mongoose.connection.on('connected', () => logger.log('info', `mongo connected at ${this.url}`));
        mongoose.connection.on('error', () => logger.log('error', 'mongo error'));
        mongoose.connection.on('disconnected', () => logger.log('warn', 'mongo disconnected'));
        mongoose.connection.on('reconnectFailed', () => logger.log('error', 'mongo failed'));
    }

    async connect() {
        await mongoose.connect(this.url, this.options);
    }

    async disconnect() {
        await mongoose.disconnect();
    }
}

module.exports = Mongo;
