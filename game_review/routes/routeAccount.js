//Routes to enable website communication

const accountControllers = require('../controllers/accountControllers')
function routeAccounts(app){
    /*app.route( '/accounts')
        .get(accountControllers.getAccountsInformation)
        .post(accountControllers.addAccount);*/
   /* app.route('/accounts/:id')
        .get(accountControllers.getAccountByUserId); */
    app.route('/accounts')
        
        .get(accountControllers.getAccountsInformation)
        .post(accountControllers.addAccount)
        
    app.route('/accounts/search')
        .get(accountControllers.getAccountsInformation)
        .get(accountControllers.getAccountByUsername)
    app.route('/accounts/:id')
        .get(accountControllers.getAccountByUserId)
        .put(accountControllers.updateAccount)
        .delete(accountControllers.deleteAccount);
}

module.exports = {routeAccounts};