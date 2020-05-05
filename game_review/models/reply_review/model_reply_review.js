class ReplyReviewModel{
    constructor(replyId,replyUser,replyDate,replyComment,foreignKeyReviewId,foreignKeyAccountId){
        this.id = replyId;
        this.username = replyUser;
        this.date = replyDate;
        this.comment = replyComment;
        this.fkReviewId = foreignKeyReviewId;
        this.fkAccountId = foreignKeyAccountId;
    }

    getId(){
        return this.id
    }
    getUsername(){
        return this.username
    }
    getDate(){
        return this.date
    }
    getComment(){
        return this.comment
    }
    getFkReviewId(){
        return this.fkReviewId
    }
    getFkAccountId(){
        return this.fkAccountId
    }

}

module.exports = ReplyReviewModel;
