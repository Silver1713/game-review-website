class Review{
    constructor(id,anonymus,username,ratings,sub,comments,datePosted,fkAccountId,fkGameId){
        this.id = id;
        this.isHidden = anonymus;
        this.username = username;
        this.ratings = ratings;
        this.subject = sub;
        this.comments = comments
        this.date = datePosted;
        this.FKaccountId = fkAccountId;
        this.FKgameId = fkGameId;
    }
    
    getId(){
        return this.id
    }
    getAnonymus(){
        return this.isHidden
    }
    getUsername(){
        return this.username
    }
    getRatings(){
        return this.ratings
    }
    getSubject(){
        return this.subject;
    }
    getComments(){
        return this.comments
    }
    getDatePosted(){
        return this.date
    }
    getFkAccountId(){
        return this.FKaccountId
    }
    getFkGameId(){
        return this.FKgameId
    }
    
}

module.exports = Review;