const gameDB = require('../models/game/database_game_model')
const Game = require('../models/game/game_model')

var gamesDB = new gameDB();


function getGamesInfo(req, res, nextRoute){
    if (Object.keys(req.query).length == 0){
        gamesDB.getGamesInfomation(function(err,succ){
            if (err){
                res.json(err);

            } else {
                res.json(succ);
            }
        });
    } else {
        nextRoute();
    }
}


function addGames(request, respond){
    var game = new Game(null, request.body.game_title, request.body.game_developer, request.body.game_platform,request.body.game_genre,request.body.game_trailer,request.body.game_image1,request.body.game_image2, request.body.game_image3,request.body.game_pro,request.body.game_cons,request.body.game_summary,parseInt(request.body.game_fav),parseInt(request.body.game_avgRatings));
    gamesDB.addGames(game, function(err,succ){
        if (err){
            respond.json(err);

        } else {
            respond.json(succ);
        }
    });
}

function updateGames(request, respond){
    if (request.params.id){
        var game = new Game(request.params.id, request.body.game_title, request.body.game_developer, request.body.game_platform,request.body.game_genre,request.body.game_trailer,request.body.game_image1,request.body.game_image2, request.body.game_image3,request.body.game_pro,request.body.game_cons,request.body.game_summary,parseInt(request.body.game_fav),parseInt(request.body.game_avgRatings));
        gamesDB.updateGame(game,function(err,succ){
            if (err){
                respond.json(err)
            } else {
                respond.json(succ)
            }
        });
    }
}

function findById(request, respond){
    if (request.params.id){
        var gameId = request.params.id;
        gamesDB.getGameById(gameId, function(err,suc){
            if (err){
                respond.json(err);
            } else {
                respond.json(suc);
            }
        });
    } 
}

function getGamesByTitle(req,res,n){
    if (req.query.title){
        var queries = req.query.title
        gamesDB.getGamesByTitle(queries, function(err,succ){
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

function filterGameByGenrePLatform(req,res,n){
    if ((req.query.genre) && (req.query.platform)){
        var filters = [req.query.genre, req.query.platform]
        gamesDB.filterbyGenrePlatform(filters, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else if ((!req.query.genre) && (req.query.platform)){
        var filters1 = ['', req.query.platform]
        gamesDB.filterbyGenrePlatform(filters1, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else if ((req.query.genre) && (!req.query.platform)){
        var filters2 = [req.query.genre,'']
        gamesDB.filterbyGenrePlatform(filters2, function(err,succ){
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


function deleteGame(request,respond){
    if (request.params.id){
        var id = request.params.id
        gamesDB.deleteGame(id, function(err,succ){
            if (err){
                respond.json(err);
            } else {
                respond.json(succ);
            }
        });
    } 
}

function getGamesByDev(req,res,n){
    if (req.query.dev){
        var answer = req.query.dev
        gamesDB.filterByDev(answer, function(err,succ){
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

function sortByFavDescending(req,res,n){
    if (req.query.sortFav){
        gamesDB.sortFav(function(err,succ){
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

function sortByRevDescending(req,res,n){
    if (req.query.sortRev){
        gamesDB.sortRev(function(err,succ){
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

function selectIfPicked(req,res,n){
    if (req.query.picked){
        gamesDB.selectIfPicked(req.query.picked, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else n();
}

module.exports = {getGamesInfo, addGames, updateGames, findById, getGamesByTitle, filterGameByGenrePLatform, deleteGame, getGamesByDev, sortByFavDescending, sortByRevDescending ,selectIfPicked}

