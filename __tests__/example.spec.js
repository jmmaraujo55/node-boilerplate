require('dotenv').config();
const mongo = require('../app/services/mongo');
const mock = require('../mocks/example');

const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const MongoConnection = require('../app/services/mongoose');

const mongod = new MongoMemoryServer();

beforeAll(async() => {
    const uri = await mongod.getConnectionString();
    const mongoConnection = new MongoConnection(uri);

    await mongoConnection.connect();

    await mongo.insert('example', mock.find);
    await mongo.insert('example', mock.update);
    await mongo.insert('example', mock.delete);
});

describe('TESTES MONGO', () => {
    test('Insert', async () => {
        const result = await mongo.insert('example', mock.insert);

        return expect(result.ops[0]).toStrictEqual(mock.insert);
    });

    test('Find', async () => {
        const result = await mongo.findOne('example', { id: mock.find.id });

        return expect(result[0]).toStrictEqual(mock.find);
    });

    test('Update', async () => {
        const update = await mongo.update('example', { id: mock.update.id }, { updated: true });

        return expect(update.result.nModified).toBe(1);
    });

    test('Find after update', async  () => {
        const result = await mongo.findOne('example', { id: mock.update.id });

        return expect(result[0]).toStrictEqual({ ...mock.update, updated: true });
    });

    test('Delete', async () => {
        await mongo.delete('example', { id: mock.delete.id });

        const mongoResult = await mongo.findOne('example', { id: mock.delete.id });

        return expect(mongoResult).toStrictEqual([]);
    });
});
