//Game Model

class game_model {
    constructor(id,title, developer,platform,genre,trailer, image1,image2,image3,pros,cons,summary,numFavourite, numAvgRating){
        this.id = id;
        this.gameTitle = title;
        this.gameDeveloper = developer;
        this.gameplatform = platform;
        this.gameGenre = genre;
        this.gameTrailers = trailer
        this.gameImage1 = image1;
        this.gameImage2 = image2;
        this.gameImage3 = image3;
        this.gamePros = pros;
        this.gameCons = cons;
        this.gameSummary = summary;
        this.gameFavourite = numFavourite
        this.rating = numAvgRating;

    }
    //Get Method

    getId(){
        return this.id;

    }
    getTitle(){
        return this.gameTitle;
    }
    getDevelopers(){
        return this.gameDeveloper;

    }
    getPlatform(){
        return this.gameplatform;
    }
    getGenre(){
        return this.gameGenre;
    }
    getTrailer(){
        return this.gameTrailers;
    }
    getImage1(){
        return this.gameImage1;

    }
    getImage2(){
        return this.gameImage2;

    }
    getImage3(){
        return this.gameImage3;
    }
    getPros(){
        return this.gamePros;
    }
    getCons(){
        return this.gameCons;
    }
    getSummary(){
        return this.gameSummary;
    }
    getFav(){
        return this.gameFavourite;
    }
    getRating(){
        return this.rating;
    }
    
}

module.exports = game_model
