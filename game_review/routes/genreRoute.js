const genreController = require('../controllers/genreControllers');

function routeGenre(app){
    app.route('/genres')
        .get(genreController.getAllGenres)
        .post(genreController.createGenre);
    app.route('/genres/search')
        .get(genreController.getGenreTitle)
        .get(genreController.getAllGenres)
        .get(genreController.getByGameId);
    app.route('/genres/:id')
        .get(genreController.getGenreById)
        .delete(genreController.deleteGenre)
        .put(genreController.updateGenre);
}

module.exports = {routeGenre};