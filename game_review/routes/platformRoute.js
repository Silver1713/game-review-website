const platformController = require('../controllers/platformControllers');

function routePlatform(app){
    app.route('/platforms')
        .get(platformController.getAllPlatforms)
        .post(platformController.createPlatform);
    app.route('/platforms/search')
        .get(platformController.getAllPlatforms)
        .get(platformController.getPlatformByTitle)
        .get(platformController.getByGameId);
    app.route('/platforms/:id')
        .get(platformController.getById)
        .put(platformController.updatePlatform)
        .delete(platformController.deletePlatform);
}

module.exports = {routePlatform}