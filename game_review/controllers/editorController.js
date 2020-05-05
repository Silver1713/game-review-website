const editorDB = require('../models/editor/db_editor');
var editorsDB = new editorDB();

const Editor = require('../models/editor/editor_model');

function getAllEditors(req,res,next){
    if ((Object.keys(req.query).length == 0) && (Object.keys(req.params).length == 0)){
        editorsDB.getAllEditors(function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    } else {
        next();
    }
}

function getById(req,res,next){
    var id = req.params.id;
    if ((req.params.id) && (Object.keys(req.params).length == 1) && (req.params.id != "reviews") && (Object.keys(req.query).length == 0)){
        editorsDB.getEditorById(id, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        next()
    }
}

function addEditor(req,res,n){
    var editor = new Editor(null,req.body.editor_name,req.body.editor_profile_pic,req.body.editor_bio, req.body.editor_account_id);
    if ((Object.keys(req.query).length == 0) && (Object.keys(req.params).length == 0)){
    editorsDB.addEditor(editor, function(err,succ){
        if (err){
            res.json(err);

        } else {
            res.json(succ);
        }
    })
} else {n()}
}

function updateEditor(req,res,next){
    var id = req.params.id
    if ((req.params.id) && (Object.keys(req.params).length == 1) && (req.params.id != "reviews") && (Object.keys(req.query).length == 0)){
        var editor = new Editor(id,req.body.editor_name,req.body.editor_profile_pic,req.body.editor_bio, null);
        editorsDB.updateEditor(editor, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        });
    } else {
        next()
    }
}

function deleteEditor(req,res,next){
    var editorId = req.params.id;
    if ((req.params.id) && (Object.keys(req.params).length == 1) && (req.params.id != "reviews") && (Object.keys(req.query).length == 0)){

        editorsDB.removeEditor(editorId, function(err,succ){
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

function getByUserAccount(req,res,next){
    if ((req.query.user) && (Object.keys(req.params).length == 0) && (req.params.id != "reviews")){
        var user = req.query.user
        editorsDB.getEditorByAccountUsername(user,function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    } else {
        next();
    } 
}

function getByName(req,res,next){
    if ((Object.keys(req.params).length == 0) && (req.query.name) && (req.params.id != "reviews")){
        var name = req.query.name
        editorsDB.getEditorByName(name,function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ);
            }
        })
    } else {
        next();
    } 
}



module.exports = {getAllEditors, getById, addEditor, updateEditor,deleteEditor,getByUserAccount, getByName};
