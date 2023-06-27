const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    eventMetAt: {
        type: String
    },
    dateMet: {
        type: Date
    },
    company: {
        type: String
    },
    positionAtCompany: {
        type: String
    },
    spark: { // like what are their common interests
        type: String
    },
    linkedIn: {
        type: String
    },
    twitter: {
        type: String
    },
    dateAdded: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Contact', ContactSchema)