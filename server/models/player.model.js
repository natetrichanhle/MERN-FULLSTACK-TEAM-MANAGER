const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Player is required'
        ],
        minlength: [2, 'Name must be at least 2 characters in length.']
    },
    position : {
        type: String,
        required: [
            true,
            'Position is required'
        ]
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);