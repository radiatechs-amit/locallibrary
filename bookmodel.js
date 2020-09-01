const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')
const autoIncrement = require('mongoose-auto-increment')

const registerDetails = new Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    isbn: {
        type: String,
    },
    release_date: {
        type: Date,
    },
},
{
    timestamps: true,
})


autoIncrement.initialize(mongoose.connection)
registerDetails.plugin(uniqueValidator, {
    message: 'already exists.',
})

registerDetails.plugin(autoIncrement.plugin, {
    model: 'bookDetails',
    field: '_id',
    startAt: 1001
})

const registerSchema = mongoose.model('bookDetails', registerDetails)
module.exports = registerSchema;