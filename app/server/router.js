const mainController = require('./controllers/main-controller');
const exampleController = require('./controllers/example-controller');

class Router {
    constructor(app) {
        app.get('/v1/ping', mainController.ping);

        app.get('/v1/example', exampleController.get);

        app.post('/v1/example', exampleController.post);

        app.put('/v1/example', exampleController.put);

        app.delete('/v1/example', exampleController.del);
    }
}

module.exports = Router;
