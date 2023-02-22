const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    timeCreated: {
        type: Date,
        default: () => Date.now(),
    }
});

module.exports = mongoose.model('Book', bookSchema);