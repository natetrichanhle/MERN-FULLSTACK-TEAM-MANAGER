const PlayerController = require('../controllers/player.controller');
module.exports = function (app) {
    app.get('/api/player', PlayerController.getPlayer);
    app.post('/api/player/new', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.getOnePlayer);
    app.put('/api/player/edit/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}