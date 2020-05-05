class Platform{
    constructor(id,gameIdFK,title){
        this.id = id;
        this.title = title;
        this.gameIdFK = gameIdFK;
    }

    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }

    getForeignKeyGameId(){
        return this.gameIdFK;
    }
}

module.exports = Platform;