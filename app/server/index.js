const express = require('express');
const Router = require('./router');
const bodyParser = require('body-parser');
const logger = require('../services/logger');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.middlewares();
        this.router = new Router(this.app);
    }

    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(morgan('tiny'));
    }

    listen() {
        this.app.listen(this.port, () => logger.log('info', `server listen at port ${this.port}`));
    }
}

module.exports = Server;
