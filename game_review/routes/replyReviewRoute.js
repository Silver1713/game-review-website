const replyController = require('../controllers/replyReviewControllers');

function routeReplyReview(app){
    app.route('/reviews/replies')
        .get(replyController.getReviewReplies)
        .post(replyController.addReplies);

    app.route('/reviews/replies/:id')
        .put(replyController.updateReply)
        .delete(replyController.deleteReply);
    app.route('/reviews/replies/search')
        .get(replyController.getRepliesByReId);
}

module.exports = {routeReplyReview};