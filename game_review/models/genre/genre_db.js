const database = require('../../database-connections');

class genreDB{
    
    getAllGenres(callback){
        var sql = "SELECT * FROM genre";
        database.query(sql,callback);
    }
    searchGenreByTitle(query, callback){
        var sql = "SELECT * FROM genre WHERE genre_title LIKE CONCAT(?,'%')"
        database.query(sql, [query],callback);
    }
    getGenreById(id, callback){
        var sql = "SELECT * FROM genre where genre_id=?";
        database.query(sql,[id],callback);
    }

    createGenre(genreObject, callback){
        var sql = "INSERT INTO genre (genre_game_id, genre_title)\
        VALUES (?,?)"
        database.query(sql,[genreObject.getForeignGameId(), genreObject.getTitle()], callback);
    }

    updateGenre(genre, callback){
        
        var sql = "UPDATE genre SET genre_title=? WHERE genre_id=?"
        database.query(sql,[genre.getTitle(), genre.getId()], callback)
    }
    deleteGenre(id,callback){
        var sql = "DELETE FROM genre WHERE genre_id= ?"
        database.query(sql,[id],callback);
    }
    genreByGameId(id,callback){
        var sql = "SELECT * FROM genre where genre_game_id = ?"
        database.query(sql,[id],callback);
        
    }
    

}




module.exports = genreDB;


