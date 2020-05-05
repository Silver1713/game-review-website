const replyDB = require('../models/reply_review/db_reply_review')
var repliesDB = new replyDB();

const Replies = require('../models/reply_review/model_reply_review');

function getReviewReplies(req,res,n){
    if (Object.keys(req.query).length == 0){
        repliesDB.getAllReplies(function(err,succ){
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

function addReplies(req,res){
    var reply = new Replies(null,req.body.reply_username, req.body.reply_date, req.body.reply_comment, req.body.review_reply_id, req.body.account_reply_id)
    repliesDB.addReviewReply(reply, function(err,succ){
        if (err){
            res.json(err);

        } else {
            res.json(succ);
        }
    })

}

function updateReply(req,res){
    var reply = new Replies(req.params.id,null,req.body.reply_date,req.body.reply_comment,null,null);
    repliesDB.updateReplyReview(reply, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
}

function deleteReply(req,res){
    var id = req.params.id
    repliesDB.deleteReplyReview(id, function(err,succ){
        if (err){
            res.json(err);
        } else {
            res.json(succ);
        }
    })
}

function getRepliesByReId(req,res){
    if (req.query.reviewId){
        repliesDB.getRepliesByReviewId(req.query.reviewId, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    }
}


module.exports = {getReviewReplies, addReplies, updateReply,deleteReply, getRepliesByReId};