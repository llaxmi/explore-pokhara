var mongoose = require('mongoose')

const DestinationSchema = mongoose.Schema({
    title: { 
        type: String
    },
    location: {
        type: String
    },
    description: String,
    image: {
        data: Buffer,  // Binary data
        contentType: String // Mime type (e.g., 'image/png')
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Destinations', DestinationSchema);
