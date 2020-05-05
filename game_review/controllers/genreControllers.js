const genreDB = require('../models/genre/genre_db')
var genresDB = new genreDB();



const genreModel = require('../models/genre/genre_model')

function getAllGenres(req,res,n){
    if (Object.keys(req.query).length == 0){
        genresDB.getAllGenres(function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    } else {
        n();
    }
}

function getGenreTitle(request,respond,next){
    if (request.query.title){
        var query = request.query.title;
        genresDB.searchGenreByTitle(query, function(err,succ){
            if (err){
                respond.json(err);
            } else {
                respond.json(succ);
            }
        });
    } else {
        next();
    }
}

function getGenreById(req,res){
    var id = req.params.id
    genresDB.getGenreById(id, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
}

function createGenre(req,res){
    var genre = new genreModel(null,req.body.genre_game_id, req.body.genre_title);
    genresDB.createGenre(genre, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
}

function updateGenre(req,res){
    var genre = new genreModel(req.params.id,null,req.body.genre_title);
    genresDB.updateGenre(genre,function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
}

function deleteGenre(req,res){
    var id = req.params.id
    genresDB.deleteGenre(id,function(err,succ){
        if (err){
            res.json(err);

        } else {
            res.json(succ);
        }
    });
}

function getByGameId(req,res,n){
    if (req.query.gameId){
        var id = req.query.gameId
        genresDB.genreByGameId(id,function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        n();
    }
}

module.exports = {getAllGenres, getGenreTitle, getGenreById, createGenre, updateGenre, deleteGenre,getByGameId};