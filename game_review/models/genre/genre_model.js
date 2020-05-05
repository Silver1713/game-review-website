class Genre {
    constructor(id,FKGameId,title){
        this.id = id;
        this.title = title;
        this.FKGameId = FKGameId;
    }

    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getForeignGameId(){
        return this.FKGameId;
    }
}

module.exports = Genre;