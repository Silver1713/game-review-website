const db = require('../../database-connections');

class reviewDB{
    getAllReviews(callback){
        var sql = "SELECT * FROM review"
        db.query(sql,callback);
    }
    
    getReviewById(reviewId, callback){
        var sql = "SELECT * FROM review where review_id= ?"
        db.query(sql,[reviewId],callback);
    }

    addReview(review,callback){
        var sql = "INSERT INTO review (review_isAnonymus, review_username, review_ratings, review_subject ,review_comments, review_date_posted, account_review_id, game_review_id)\
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);"

        db.query(sql, [review.getAnonymus(), review.getUsername(), review.getRatings(),review.getSubject(),review.getComments(), review.getDatePosted(), review.getFkAccountId(), review.getFkGameId()], callback);
    }

    updateReview(review,callback){
        var sql = "UPDATE review SET review_isAnonymus = ?, review_ratings = ?, review_subject = ?,review_comments = ?, review_date_posted = ? WHERE (review_id = ?);"

        db.query(sql, [review.getAnonymus(), review.getRatings(),review.getSubject(),review.getComments(), review.getDatePosted(), review.getId()], callback);
    }


    deleteReview(id, callback){
        var sql = "DELETE FROM review WHERE review_id= ?";
        db.query(sql,[id],callback);
    }

    findReviewByGame(gameTitle, callback){
        var sql = "select review.* from review inner  join game on game_review_id=game_id where game_title like ?"
        db.query(sql, [gameTitle],callback);
    }
    filterReviewByUserAndAnonymity(list, callback){
        var sql = "SELECT * from review where review_isAnonymus LIKE ? AND review_username LIKE CONCAT(?,'%')"
        db.query(sql, [list[0], list[1]], callback);
    }

    filterByContents(key, callback){
        var sql = "SELECT * FROM review where review_comments LIKE CONCAT('%',?,'%')"
        db.query(sql, [key],callback)
    }
    sortByDate(list, callback){
        var sql = 'select review.* from review inner  join game on game_review_id=game_id where game_title like ? order by review_date_posted DESC'
        db.query(sql, [list], callback);
    }
    
   
}

module.exports = reviewDB;