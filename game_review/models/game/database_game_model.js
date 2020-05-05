//Database Model
//Get sql database

var database = require('../../database-connections')

class gameDB{
    getGamesInfomation(callback){
        var sql = 'SELECT * FROM game'
        database.query(sql,callback);
    }
    addGames(gameObj, callback){
        var sql = "INSERT INTO game \
        (game_title, game_developer, game_platform, game_genre, game_trailer, game_image1, game_image2, game_image3, game_pro, game_cons, game_summary, game_fav, game_avgRatings) \
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
        database.query(sql,[gameObj.getTitle(), gameObj.getDevelopers(), gameObj.getPlatform(), gameObj.getGenre(), gameObj.getTrailer(),gameObj.getImage1(), gameObj.getImage2(),gameObj.getImage3(), gameObj.getPros(), gameObj.getCons(), gameObj.getSummary(), gameObj.getFav(), game.getRating()], callback)
    }
    updateGame(game, callback){
        var sql = "UPDATE game SET game_title = ?, game_developer = ?, game_platform = ?, game_genre = ?, game_trailer = ?, game_image1 = ?, game_image2 = ?, game_image3 = ?, game_pro = ?, game_cons = ?, game_summary = ?, game_fav = ?, game_avgRatings = ? WHERE (game_id = ?);"
        database.query(sql,[game.getTitle(), game.getDevelopers(), game.getPlatform(), game.getGenre(), game.getTrailer(),game.getImage1(), game.getImage2(),game.getImage3(), game.getPros(), game.getCons(), game.getSummary(), game.getFav(),game.getRating(), game.getId()], callback);
    }

    getGameById(gameId, callback){
        var sql = "SELECT * FROM game where game_id= ?";
        database.query(sql, [gameId], callback);
    }
    getGamesByTitle(gameTitle, callback){
        var sql = "SELECT * FROM game WHERE game_title LIKE CONCAT(?,'%')"
        database.query(sql,[gameTitle],callback);
    }
    filterbyGenrePlatform(filters, callback){
        var sql = "SELECT * FROM game WHERE (game_genre LIKE CONCAT('%',?,'%')) AND (game_platform LIKE CONCAT('%',?,'%'))"
        database.query(sql, [filters[0], filters[1]], callback);
    }

    deleteGame(gameId, callback){
        var sql = "DELETE FROM game WHERE game_id = ?"
        database.query(sql,[gameId],callback);
    }
    filterByDev(DevCompany,callback){
        var sql = "SELECT * FROM game WHERE game_developer LIKE CONCAT(?,'%')"
        database.query(sql,[DevCompany],callback)
    }
    sortFav(callback){
        var sql = 'SELECT * FROM game order by game_fav DESC';
        database.query(sql,callback);
    }
    sortRev(callback){
        var sql = 'SELECT * FROM game order by game_avgRatings DESC'
        database.query(sql, callback);
    }
    selectIfPicked(IntIsPicked, callback){
        var sql = 'SELECT * FROM game where editor_picked_game = ?'
        database.query(sql, [IntIsPicked], callback);
    }
}


module.exports = gameDB;


