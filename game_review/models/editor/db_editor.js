const db = require('../../database-connections');

class editorDB{
    getAllEditors(callback){
        var sql = "SELECT * FROM editor";
        db.query(sql,callback);
    }
    getEditorById(id, callback){
        var sql = "SELECT * FROM editor where editor_id= ?";
        db.query(sql,[id], callback);
    }
    addEditor(editor,callback){
        var sql = "INSERT INTO editor (editor_name, editor_profile_pic, editor_bio, editor_account_id) VALUES (?, ?, ?, ?);"
        db.query(sql,[editor.getName(),  editor.getProfilePic(),editor.getBio(), editor.getEditorAccountId()], callback)
    }

    updateEditor(editor, callback){ //Update Linked
        var sql = "UPDATE editor LEFT JOIN editor_review ON editor_id=editor_review_editor_id SET editor_name = ?, editor_profile_pic = ?, editor_bio = ?, editor_review.editor_review_about = ? WHERE editor_id= ?;"
        db.query(sql,[editor.getName(),  editor.getProfilePic(),editor.getBio(),editor.getBio(),editor.getId()], callback)
    }

    removeEditor(editorId,callback){
        var sql = "DELETE FROM editor WHERE editor_id= ?";
        db.query(sql,[editorId],callback);
    }
    getEditorByAccountUsername(user,callback){
        var sql = "SELECT editor.* FROM editor INNER JOIN account on editor_account_id = account_id WHERE account_username LIKE CONCAT(?,'%')"
        db.query(sql,[user],callback);
    }
    getEditorByName(name,callback){
        var sql = "SELECT * FROM editor WHERE editor_name LIKE CONCAT(?,'%')"
        db.query(sql,[name],callback);
    }
}


module.exports = editorDB;