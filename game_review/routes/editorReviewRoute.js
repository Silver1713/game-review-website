const edreController = require('../controllers/editorReviewController')

function routeEditorReview(app){
    app.route('/editors/reviews')
        .get(edreController.getAllReviews)
        .post(edreController.addReview);
    app.route('/editors/reviews/:id')
        .get(edreController.getById)
        .put(edreController.updateReview)
        .delete(edreController.deleteReview);
    app.route('/editors/reviews/search')
        .get(edreController.getAllReviews)
        .get(edreController.getByGameTitle)
        .get(edreController.getByUsername)
        .get(edreController.getByContent);
}


module.exports = {routeEditorReview};