{/* <div class="col-md-12 col-xs-12 col-sm-12 mt-sm-4 col-lg-8">
                    <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                        <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                        <div class="imgOverlay fade-captions">
                            <h6 style="color: white;"><b>Warframe</b></h6>
                        </div>
                        </div></a>
                </div>
                <div class="col-sm-12 col-xs-12 col-md-12 col-lg-4 mt-sm-4">
                           
                                
                                    <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                        <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                        <div class="imgOverlay fade-captions">
                            <h6 style="color: white;"><b>Warframe</b></h6>
                        </div>
                        </div></a>
                     
                        <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                        <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                        <div class="imgOverlay fade-captions">
                            <h6 style="color: white;"><b>Warframe</b></h6>
                        </div>
                        </div></a>
                                </div>
                                
                    
    
                    <br><br>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-sm-4">
                            <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                                <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                                </div></a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-sm-4">
                            <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                                <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                                </div></a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-sm-4">
                            <a href="gameDetail.html"><div class="thumbnail overlayimg-con inner-shadow2 rounded">
                                <img src="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg" width="100%">
                                </div></a>
                        </div>
</div> */}
                



function formatTopRatedIndex(imageThumbnail, gameTitle,id){
            var cell = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-2 ">\
            <a href="gameDetail.html" class="gameLink"><div id="'+id+ '" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">\
                <img src="' + imageThumbnail +  '"width="100%"><div class="imgOverlay fade-captions">\
            <h6 style="color: white;"><b>'+ gameTitle + '</b></h6>\
        </div>\
                </div></a>\
        </div>'
        return cell;
}

function rankedPopular(imageThumbnail, gameTitle,id, cellno){
    var originCell = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-2">\
    <a href="gameDetail.html" class="gameLink"><div id="'+id+ '" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">\
        <img src="'+ imageThumbnail + '" width="100%">\
        <div class="imgOverlay fade-captions">\
            <h6 style="color: white;"><b>'+ gameTitle +'</b></h6>\
        </div>\
        </div></a>\
</div>'
    
    var firstCell = '<div class="col-md-12 col-xs-12 col-sm-12  col-lg-8 my-2">\
    <a href="gameDetail.html" class="gameLink"><div id="'+id+ '" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">\
        <img src="'+ imageThumbnail + '" width="100%">\
        <div class="imgOverlay fade-captions">\
            <h6 style="color: white;"><b>'+ gameTitle +'</b></h6>\
        </div>\
        </div></a>\
</div>'
var secondCell = '<div class="col-sm-12 col-xs-12 col-md-12 col-lg-4 my-2">\
                    <a href="gameDetail.html" class="gameLink"><div id="'+id+ '" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">\
        <img src="'+ imageThumbnail +  '" width="100%">\
        <div class="imgOverlay fade-captions">\
            <h6 style="color: white;"><b>'+ gameTitle +'</b></h6>\
        </div>\
        </div></a>'
var thirdCell = '<a href="gameDetail.html" class="gameLink"><div id="'+id+ '" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded my-2">\
        <img src="'+ imageThumbnail +  '" width="100%">\
        <div class="imgOverlay fade-captions">\
            <h6 style="color: white;"><b>'+ gameTitle +'</b></h6>\
        </div>\
        </div></a></div>'
if (cellno == 0){
    return firstCell;
}  else if (cellno == 1){
    return secondCell;
} else if (cellno == 2){
    console.log(cellno);
    return thirdCell;
} else {
    return originCell;
}
}
function resetPopular(){
    var topRatedDiv = document.getElementById('popularIndex')
    topRatedDiv.innerHTML = ""
}
function loadPopular(IncrementCell){
    var topRatedDiv = document.getElementById('popularIndex')
    topRatedDiv.innerHTML += IncrementCell
}



function resetTopRated(){
    var topRatedDiv = document.getElementById('topRatedDiv')
    topRatedDiv.innerHTML = ""
}
function loadTopRated(IncrementCell){
    var topRatedDiv = document.getElementById('topRatedDiv')
    topRatedDiv.innerHTML += IncrementCell
}

function parseJson(json){
    var json = JSON.parse(json);
    if ((json) && (json.length != 0)){
        return json;
    } else {
        return null;
    }
}


function onBodyLoad(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/games');
    xhr.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){
            var jsonObjs = parseJson(this.responseText)
            console.log(jsonObjs);
            resetTopRated()
            resetPopular()
            carouselReset()
            var cell2 = ""
            for (var i = 0; i < 9 ;i++){
                var gameTitle = jsonObjs[i].game_title;
                var gameThumbnail = jsonObjs[i].game_image1;
                var id = jsonObjs[i].game_id;
                var cell =  formatTopRatedIndex(gameThumbnail, gameTitle,id)
                loadTopRated(cell);
            }
            for (var i = 0; i < 6 ;i++){
                var gameTitle = jsonObjs[i].game_title;
                var gameThumbnail = jsonObjs[i].game_image1;
                var id = jsonObjs[i].game_id;
                if (i < 3){
                    cell2 += rankedPopular(gameThumbnail,gameTitle,id,i)
                    console.log(cell2);
                } else {
                cell2 += rankedPopular(gameThumbnail,gameTitle,id,i)
                }
            }
            loadPopular(cell2);

            for (var i = 0; i < 4 ;i++){
                var gameTitle = jsonObjs[i].game_title;
                var gameThumbnail = jsonObjs[i].game_image2;
                var id = jsonObjs[i].game_id;
                var shortDesc = jsonObjs[i].game_summary.toString().substr(0,100) + '...'
                var cell =  carouselSet(id,gameTitle,gameThumbnail,shortDesc,i)
                
                carouselLoad(cell)
            }

            attachClickEventGame()

            

        }
    }

    xhr.send();
}
    //    { "game_id": 5,
    //     "game_title": "Warframe",
    //     "game_developer": "Digital Extremes",
    //     "game_platform": "WIN,PS4,XBOX",
    //     "game_genre": "TPS, ACTION, SCI-FI",
    //     "game_trailer": "https://www.youtube.com/embed/cXSVA5IntiM",
    //     "game_image1": "https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Warframe.jpg",
    //     "game_image2": "/images/placeholders/logoPlaceholder.jpg",
    //     "game_image3": "/images/placeholders/logoPlaceholder.jpg",
    //     "game_pro": "1.Good Graphics, Great Lore",
    //     "game_cons": "1. Hardest to level up when starting at beginner",
    //     "game_summary": "Warframe is set in a distant future where the solar system is dominated between the Grineer, an empire race of militarized clones; the Corpus, a mega-corporation merchant cult with advanced robotics and laser technology; and the Infested, the name for a disease and its victims that devours all. The players takes the role of a Tenno, an ancient warrior created by the Orokin to battle a mysterious foe but left to slumber generations ago, until woken by an entity called the Lotus for the sole purpose of reuniting the scattered, war-torn colonies throughout the system.",
    //     "game_fav": "1900"}



function carouselReset(){
    var carousel = document.getElementById('carouselContent');
    carousel.innerHTML = '';
}

function carouselSet(id, title, image, shortdesc,i){
    var cellOne = '<div class="carousel-item active">\
    <div class="carousel-caption fade-captions">\
        <h5>'+title+'</h5>\
        <p>'+shortdesc+'</p>\
    </div>\
    <a href="gameDetail.html"><id="'+id+'" div class="thumbnail">\
        <img src="'+image+'" alt="Image not Loaded" width="100%" style="z-index: -2;">\
        </div></a>\
</div>'
    var celi = '<div class="carousel-item">\
    <div class="carousel-caption fade-captions">\
        <h5>'+title+'</h5>\
        <p>'+shortdesc+'</p>\
    </div>\
    <id="'+id+'" div class="thumbnail">\
        <img src="'+image+'" alt="Image not Loaded" width="100%">\
    </div>\
</div>'
    if (i == 0){
        return cellOne;
    } else {
        return celi;
    }
}
function carouselLoad(incrememt){
    var carousel = document.getElementById('carouselContent');
    carousel.innerHTML += incrememt;
}

