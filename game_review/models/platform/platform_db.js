const database = require('../../database-connections');

class PlatformDB {
    getAllPlatforms(callback){
        var sql = 'SELECT * FROM platform'
        database.query(sql,callback);
        
    }
    
    searchPlatformByTitle(query, callback){
        var sql = "SELECT * FROM platform WHERE platform_title LIKE CONCAT(?,'%')"
        database.query(sql, [query],callback);
    }
    getPlatformById(id, callback){
        var sql = "SELECT * FROM platform where platform_id=?";
        database.query(sql,[id],callback);
    }

    createPlatform(platformObject, callback){
        var sql = "INSERT INTO platform (platform_game_id, platform_title)\
        VALUES (?,?)"
        database.query(sql,[platformObject.getForeignKeyGameId(), platformObject.getTitle()], callback);
    }

    updatePlatform(platform, callback){
        
        var sql = "UPDATE platform SET platform_title=? WHERE platform_id=?"
        database.query(sql,[platform.getTitle(), platform.getId()], callback)
    }
    deletePlatform(id,callback){
        var sql = "DELETE FROM platform WHERE platform_id= ?"
        database.query(sql,[id],callback);
    }
    platformByGameId(id,callback){
        var sql = "SELECT * FROM platform where platform_game_id = ?"
        database.query(sql,[id],callback);
        
    }

}

module.exports = PlatformDB;