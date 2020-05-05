//account controllers

const accountDB = require('../models/account/db_model_account') // Get the accountDB object

var accountsDB = new accountDB(); //Initialize a new object

const Account = require("../models/account/account_model");


function getAccountsInformation(req, res,next){  // Create a new function getAccountsInformation with request and responds as its parameter
        console.log(req.query)
    if (Object.keys(req.query).length == 0){
        accountsDB.getAccountsInformation(function(error,result){ 
            //Call getAccountsInformation on accountsDB object; accountsDB.getAccountInformation(function(error,result)...)
            console.log(req);
            if (error){
                res.json(error)
            } else {
                res.json(result)
                console.log(result);
            }
        });
    } else {
        console.log('next')
        next()
    }
}

function getAccountByUserId(request,respond, next){
    var  userId = request.params.id
    console.log(userId);
    if (userId){

        accountsDB.getAccountById(userId, function(error,result){
            if (error){
                
                respond.json(error);
            } else { 
                respond.json(result);
            }
        });
    }
}

function getAccountByUsername(request,respond, next){
    console.log(123);
    console.log(request.query.user)
    if (request.query.user){
        console.log('run123')
        accountsDB.getAccountByUsername(request.query.user, function(err,succ){
            if (err){
                respond.json(err);
            } else {
                respond.json(succ);
            }
        })
    } else {
        console.log('next')
        next();
    }
}

function addAccount(request1,res){
    console.log(request1.body);
    var account = new Account(null,request1.body.account_date_created, request1.body.account_email, request1.body.account_username, request1.body.account_password, request1.body.account_DOB,request1.body.account_profile, request1.body.account_isSuspended, request1.body.account_isEditor);
    accountsDB.addAccount(account, function(err,succ){
        if (err){
            res.json(err);
        } else{
            res.json(succ);
        }
    });
}

function updateAccount(req,res){
    if (req.params.id){
        var userId = req.params.id
        var account =  new Account(userId,null, req.body.account_email, null, req.body.account_password, req.body.account_DOB,req.body.account_profile, req.body.account_isSuspended, req.body.account_isEditor);
        accountsDB.updateAccount(account, function(err,succ){
            if (err){
                res.json(err);
            } else {
                res.json(succ)
            }
        });
    } 
}

function deleteAccount(req,res){ 
    if (req.params.id){
        var id = req.params.id;
        accountsDB.deleteAccount(id, function(err,succ){
            if (err){
                res.json(err)

            } else {
                res.json(succ)
            }

        });
    } 
}


module.exports = {getAccountsInformation, getAccountByUserId, addAccount, getAccountByUsername, updateAccount, deleteAccount};