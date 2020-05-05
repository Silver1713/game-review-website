const editorController = require('../controllers/editorController');

function routeEditor(app){
    app.route('/editors')
        .get(editorController.getAllEditors)
        .post(editorController.addEditor);
    app.route('/editors/:id')
        .get(editorController.getById)
        
        .delete(editorController.deleteEditor)
        .put(editorController.updateEditor);
    app.route('/editors/search')
        .get(editorController.getByUserAccount)
        .get(editorController.getByName);
        

}


module.exports = {routeEditor};