const models = require('./mongoose/models');

class Mongo {
    find(model, query, project = {}, returnType = false) {
        return this.returnHandler(models[model].collection.find(query).project(project), returnType);
    }

    findOne(model, query, project = {}, ) {
        return this.returnHandler(models[model].collection.find(query).project(project), 'array');
    }

    insert(model, query) {
        return models[model].collection.insert(query);
    }

    update(model, query, set) {
        return models[model].collection.update(query, { $set: set });
    }

    delete(model, query) {
        return models[model].collection.remove(query);
    }

    returnHandler(cursor, type) {
        let value;

        switch (type) {
            case 'array':
                value = cursor.toArray();
                break;
            case 'stream':
                value = cursor.stream();
                break;
            default:
                value = cursor;
                break;
        }

        return value;
    }
}

module.exports = new Mongo();
