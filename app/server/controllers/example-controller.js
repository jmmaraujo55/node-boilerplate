const mongo = require('../../services/mongo');

class ExampleController {
    async get(req, res) {
        try {
            const query = req.body.find || {};
            const response = [];

            const cursor = await mongo.find('example', query);

            while (await cursor.hasNext()) {
                response.push(await cursor.next());
            }

            return res.status(200).send(response);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }

    async post(req, res) {
        try {
            if (!req.body.insert) {
                return res.status(400).send('missing param - [insert]');
            }

            await mongo.insert('example', req.body.insert);

            return res.status(200).send('ok');
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }

    async put(req, res) {
        try {
            const requiredParams = ['find', 'update'];

            for (const param of requiredParams) {
                if (!req.body[param]) {
                    return res.status(400).send(`missing param - [${param}]`);
                }
            }

            await mongo.update('example', req.body.find, req.body.update);

            return res.status(200).send('ok');
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }

    async del(req, res) {
        try {
            if (!req.body.find) {
                return res.status(400).send('missing param - [find]');
            }

            await mongo.delete('example', req.body.find);

            return res.status(200).send('ok');
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }
}

module.exports = new ExampleController();
