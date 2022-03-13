const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/pervaProject');

const Player = mongoose.model('player',{
    nama:String,
    password:String,
    newScore:String,
    highScore: String,
});

module.exports = Player;