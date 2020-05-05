const reviewDB = require('../models/reviews/db_review') // Get the reviewDB object

var reviewsDB = new reviewDB(); //Initialize a new object

const Review = require("../models/reviews/review-model");

function getAllReviews(req,res,next){
    if (Object.keys(req.query).length == 0){
        reviewsDB.getAllReviews(function(err,succ){
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

function getReviewById(req,res,n){
    console.log(req.params);
    if ((req.params.id != "replies") && (Object.keys(req.query).length == 0) &&(req.params.id != "search")){
        
        var id = req.params.id
        reviewsDB.getReviewById(id, function(err,succ){
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

function addReview(req,res){
    var review = new Review(null, req.body.review_isAnonymus, req.body.review_username,req.body.review_ratings, req.body.review_subject,req.body.review_comments, req.body.review_date_posted, req.body.account_review_id, req.body.game_review_id);
    console.log(req.body);
    console.log(review.getAnonymus())
    console.log(review.getComments())
    reviewsDB.addReview(review, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
}

function updateReview(req,res){
    if (req.params.id != "replies"){
        var userId = req.params.id
        var review = new Review(userId, req.body.review_isAnonymus, null,req.body.review_ratings, req.body.review_subject,req.body.review_comments, req.body.review_date_posted, null,null);
        reviewsDB.updateReview(review, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    }
}


function deleteReview(req,res){
    if (req.params.id != "replies"){
        var userId = req.params.id;
        reviewsDB.deleteReview(userId, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    }    
}

function findReviewByGameTitle(req,res,n){
    if ((req.query.gametitle) &&  (Object.keys(req.query).length != 0)){
        console.log("hello", req.query);
        reviewsDB.findReviewByGame(req.query.gametitle,function(err,succ){
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

function findReviewByUserAndAnoymity(req,res,n){
    if ((req.query.hidden) && (req.query.user)){
        var list = [req.query.hidden, req.query.user] // or array
        reviewsDB.filterReviewByUserAndAnonymity(list, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else if ((req.query.hidden) && (!req.query.user)){
        var list = [req.query.hidden, '%'] 
        reviewsDB.filterReviewByUserAndAnonymity(list, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });

    } else if ((!req.query.hidden) && (req.query.user)){
        var list = ['%', req.query.user] 
        reviewsDB.filterReviewByUserAndAnonymity(list, function(err,succ){
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

function filterByContents(req,res,n){
    if (req.query.content){
        var key = req.query.content;
        reviewsDB.filterByContents(key, function(err,suc){
            if (err){
                res.json(err);
            } else {
                res.json(suc);
            }
        })
    } else {
        n();
    }
}


function sortByGameDate(req,res,n){
    if ((req.query.gameName) && (req.query.desc)){
        console.log("HelloWorld")
        var key = req.query.gameName;
        reviewsDB.sortByDate(key, function(suc,err){
            if (err){
                res.json(err);
            } else {
                res.json(suc);
            }
        })

    } else {
        n()
    }
}




module.exports = {getAllReviews, getReviewById, addReview, updateReview, deleteReview,findReviewByGameTitle, findReviewByUserAndAnoymity, filterByContents, sortByGameDate}