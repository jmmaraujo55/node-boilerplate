const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({});

module.exports = mongoose.model('example', exampleSchema);
