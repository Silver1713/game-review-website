const db = require('../../database-connections');

class replyReviewDB{
    getAllReplies(callback){
        var sql = 'SELECT * FROM reply_review'
        db.query(sql,callback);
    }
    addReviewReply(reply, callback){
        var sql = "INSERT INTO reply_review (reply_username, reply_date, reply_comment, review_reply_id, account_reply_id)\
        VALUES (?, ?, ?, ?,?)";
        db.query(sql, [reply.getUsername(), reply.getDate(), reply.getComment(), reply.getFkReviewId(), reply.getFkAccountId()], callback);

    }
    deleteReplyReview(id,callback){
        var sql = "DELETE FROM reply_review WHERE reply_id= ?";
        db.query(sql,[id],callback);

    }
    updateReplyReview(reply,callback){
        var sql = "UPDATE reply_review SET reply_date = ?, reply_comment = ?\
        WHERE reply_id= ?"
        db.query(sql,[reply], callback);

    }
    getRepliesByReviewId(id,callback){
        var sql = "SELECT reply_review.* FROM reply_review INNER JOIN review ON review_reply_id=review_id WHERE review_id = ?";
        db.query(sql,[id],callback);
    }
    
    
}

module.exports = replyReviewDB;