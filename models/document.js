const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    binName: {
        type: String,
        required: true
    },
    accessLevel: {
        type: Number,
        required: true
    }
});

const Document = mongoose.model('documents', DocumentSchema);
module.exports = Document;