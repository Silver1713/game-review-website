"use strict"
//Handle the codes to communicate with the SQL database

//Get the database connection modules

var database = require('../../database-connections');

class accountDB{
    getAccountsInformation(callback){
        var sql = 'SELECT * FROM account';
        database.query(sql,callback);
    }
    getAccountById(userId, callback){
        var sql = 'SELECT * FROM account where account_id=' + "?"; //Developers use
        database.query(sql,[userId],callback);
    }
    getAccountByUsername(username,callback){
        var sql = 'SELECT * FROM account where account_username LIKE' + " concat(?, '%')"; //For public use such as finding users
        console.log(username)
        database.query(sql,[username],callback);
    }
    addAccount(account,callback){
        var sql = "INSERT INTO account (account_date_created, account_email, account_username, account_password, `account_DOB`, `account_profile`, `account_isSuspended`, `account_isEditor`)\
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
        console.log(account.getCreationDate());
        database.query(sql, [ account.getCreationDate(), account.getEmail(), account.getUsername(), account.getPassword(),account.getBirthdate(),account.getProfile(), account.checkSuspended(), account.checkEditor()], callback)
    }
    updateAccount(account, callback){
        var sql = "UPDATE account \
        SET account_email = ?, account_password = ?, account_DOB = ?, account_profile=?, account_isSuspended = ?, account_isEditor = ?\
        WHERE account_id = ?"
        database.query(sql, [account.getEmail(), account.getPassword(), account.getBirthdate(), account.getProfile() ,account.checkSuspended(), account.checkEditor(), account.getId()],callback)

    }

    deleteAccount(accountId,callback){
        var sql = "DELETE FROM account WHERE account_id=?"
        database.query(sql, [accountId], callback)
    } 

}


module.exports = accountDB;

