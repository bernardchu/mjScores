var playerController = require('./playerController');

module.exports = function(app) {
  // app.post('/', playerController.addNew);
  app.get('/', playerController.fetchAll);
  // app.get('/:playerId', playerController.fetchById);
};