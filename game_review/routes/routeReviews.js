const routeControllers = require('../controllers/reviewController')

function routeReviews(app){
    app.route('/reviews')
        .get(routeControllers.getAllReviews)
        .post(routeControllers.addReview);
    
    app.route('/reviews/search')
        .get(routeControllers.getAllReviews)
        .get(routeControllers.sortByGameDate)
        .get(routeControllers.findReviewByGameTitle)
        .get(routeControllers.findReviewByUserAndAnoymity)
        .get(routeControllers.filterByContents);
        
    app.route('/reviews/:id')
        .get(routeControllers.getReviewById)
        .put(routeControllers.updateReview)
        .delete(routeControllers.deleteReview);


}

module.exports = {routeReviews};