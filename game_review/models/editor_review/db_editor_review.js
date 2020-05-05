const db = require('../../database-connections');

class EditorReviewDB{
    getAllReviews(callback){
        var sql = "SELECT * FROM  editor_review"
        db.query(sql,callback);

    }
    addReviews(review,callback){
        var sql = "INSERT INTO editor_review (editor_review_game, editor_review_about, editor_review_text, editor_review_editor_id,editor_review_account_id)\
        VALUES (?, ?, ?, ?,?);"
        db.query(sql,[review.getGameTitle(),review.getAbout(), review.getText(), review.getFkEditorId(),review.getFkAccountId], callback);


    }

    updateReview(review,callback){
        var sql = "UPDATE editor_review SET editor_review_game = ?, editor_review_text = ? WHERE editor_review_id = ?;"
        db.query(sql,[review.getGameTitle(),review.getText(),review.getId()],callback);

    }

    deleteReview(id,callback){
        var sql = "DELETE FROM editor_review WHERE editor_review_id = ?"
        db.query(sql,[id],callback);
    }
    searchReviewByGameTitle(title,callback){
        var sql = "SELECT * FROM editor_review where editor_review_game like concat(?,'%')"
        db.query(sql,[title],callback)
    }
    getReviewByEditorUsername(name,callback){
        var sql = "SELECT account_username,editor_review.* FROM editor_review INNER JOIN account ON editor_review_account_id=account_id WHERE account_username LIKE CONCAT(?,'%');"
        db.query(sql,[name],callback);

    }
    getReviewByContent(content,callback){
        var sql = "SELECT * FROM editor_review WHERE editor_review_text LIKE CONCAT('%',?,'%');"
        db.query(sql,[content],callback);
    }
    
    getById(id,callback){
        var sql = "SELECT * FROM editor_review WHERE editor_review_id = ?"
        db.query(sql,[id],callback)
    }

    
}

module.exports = EditorReviewDB;