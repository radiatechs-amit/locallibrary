const Mongoose = require('mongoose');
const debug = require('debug')('locallibrary:db');

Mongoose.Promise = global.Promise;
Mongoose.connect( `mongodb://localhost:27017/locallibrary`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    retryWrites: true,
    useFindAndModify: false,
})

const db = Mongoose.connection;

db.once('open', () => {
    debug('MongoDB connection with database succeeded.')
});

process.on("SIGINT", () => {
    db.close(() => {
        debug('MongoDB connection disconnected through app termination.');
        process.exit();
    });
});

module.exports = db;