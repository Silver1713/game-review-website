var database = require('./node_modules/mysql')

var connectionPool = database.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'game_review'
});


module.exports = connectionPool;

