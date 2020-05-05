//Routes...

const gameControllers = require('../controllers/gameControllers')

function routeGames(app){
    app.route('/games')
        .get(gameControllers.getGamesInfo)
        .post(gameControllers.addGames)
        .get(gameControllers.selectIfPicked)
        .get(gameControllers.sortByFavDescending)
        .get(gameControllers.sortByRevDescending)

    app.route('/games/search')
    .get(gameControllers.getGamesInfo)
    .get(gameControllers.getGamesByTitle)
    .get(gameControllers.filterGameByGenrePLatform)
    .get(gameControllers.getGamesByDev);

    app.route('/games/:id')
    .get(gameControllers.findById)
    .put(gameControllers.updateGames)
    .delete(gameControllers.deleteGame);

}


module.exports = {routeGames};