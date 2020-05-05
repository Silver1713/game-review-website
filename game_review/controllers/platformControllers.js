const PlatformDB = require('../models/platform/platform_db');
var platformsDB = new PlatformDB();
const PlatformModel = require('../models/platform/platform_model');

function getAllPlatforms(req,res,next){
    if (Object.keys(req.query).length == 0){
        platformsDB.getAllPlatforms(function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        next();
    }
}

function getPlatformByTitle(req,res,next){
    if (req.query.title){
        var query = req.query.title
        platformsDB.searchPlatformByTitle(query, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        next();
    }
}

function createPlatform(req,res){
    var platObj = new PlatformModel(null,req.body.platform_game_id, req.body.platform_title);
    platformsDB.createPlatform(platObj, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
}

function updatePlatform(request,respond){
    var platform = new PlatformModel(request.params.id,request.body.platform_game_id, request.body.platform_title);
    platformsDB.updatePlatform(platform, function(err,succ){
        if (err){
            respond.json(err);
        } else {
            respond.json(succ);
        }
    })
}

function deletePlatform(req,res){
    var id = req.params.id
    platformsDB.deletePlatform(id,function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
}

function getById(req,res){
    var id = req.params.id;
    platformsDB.getPlatformById(id,function(err,succ){
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
        platformsDB.platformByGameId(id,function(err,succ){
            if (err){
                res.json(err)
            } else {
                res.json(succ);
            }
        });
    } else {
        n();
    }
}

module.exports = {getAllPlatforms,createPlatform,updatePlatform,deletePlatform,getPlatformByTitle,getById, getByGameId};