const editorReviewDB = require('../models/editor_review/db_editor_review')
var editorReviewsDB = new editorReviewDB();

const editorReviewModel = require('../models/editor_review/model_editor_review');



function getAllReviews(req,res,n){
    if ((Object.keys(req.params).length == 0) && (Object.keys(req.query).length == 0)){
    editorReviewsDB.getAllReviews(function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
} else n();
}

function addReview(req,res,n){
    if (((req.params.id) && (Object.keys(req.query).length == 0))){
    var obj = new editorReviewModel(null, req.body.editor_review_game, req.body.editor_review_about,req.body.editor_review_text, req.body.editor_review_editor_id, req.body.editor_review_account_id);
    editorReviewsDB.addReviews(obj, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
} else {n()}
}

function updateReview(req,res){
    var obj = new editorReviewModel(req.params.id,req.params.editor_review_game,null,req.params.editor_review_text,null);
    editorReviewsDB.updateReview(obj,function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
}

function deleteReview(req,res,n){
    var id = req.params.id
    if ((req.params.id) && (Object.keys(req.query).length == 0)){
    editorReviewsDB.deleteReview(id,function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    });
} else {n()}
}

function getByUsername(req,res,n){
    if (req.query.user){
        var user = req.query.user;
        editorReviewsDB.getReviewByEditorUsername(user,function(err,succ){
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

function getByGameTitle(req,res,n){
    if (req.query.title){
        var title = req.query.title;
        editorReviewsDB.searchReviewByGameTitle(title,function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        n()
    }
}

function getByContent(req,res,n){
    if (req.query.content){
        var content = req.query.content;
        editorReviewsDB.getReviewByContent(content,function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        n()
    }
}

function getById(req,res,n){
    console.log(req);
    var id = req.params.id
    console.log((req.params.id) && (Object.keys(req.query).length == 0))
    if((req.params.id) && (Object.keys(req.query).length == 0)){
    editorReviewsDB.getById(id, function(err,succ){
        
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
} else {n()}
}




module.exports = {getAllReviews, addReview, updateReview, deleteReview,getByUsername,getByGameTitle,getByContent,getById};

