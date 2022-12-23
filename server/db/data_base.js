const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Login');

const db = mongoose.connection;

db.on('connected', () => console.log('Connect to MongoDB'));
db.on('error', () => console.log('MongoDB error to connection'));

module.exports = mongoose;