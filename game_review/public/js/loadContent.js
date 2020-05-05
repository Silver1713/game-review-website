function assignBanner(image){
    $('.masthead').css('background-image','url('+ image + ')')
}

function onContentLoad(){
    var url = new URL(window.location.href);
    var gameId = url.searchParams.get('id');
    var query = 'games/' + gameId
    var xhr = new XMLHttpRequest()
    xhr.open('GET',query)
    xhr.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){
            var jObj = parseJson(this.responseText);
            if (jObj){
                clearCarousel('carouselBodyContent')
                loadVideo(jObj.game_trailer)
                var images = [jObj.game_image2, jObj.game_image3]
                assignBanner(images[1])
                assignCarousel('carouselBodyContent',2,images);
                var info = [jObj.game_genre, jObj.game_platform, jObj.game_avgRatings,jObj.game_fav,jObj.game_pro,jObj.game_cons,jObj.game_summary]
                eraseInfo()
                for (var i =0; i < 4;i++){
                    var inform = LoadInformation(info, i);
                    assignInfo(inform);
                }


                var newXML = new XMLHttpRequest()
                newXML.open('GET', 'reviews/search?gameName=' + jObj.game_title+'&desc=desc');
                newXML.onload = function(success){
                    if (success){

                        //format review
                        clearRecent()
                        var json = JSON.parse(this.responseText);
                        if ((json) && (Object.keys(json).length != 0)){
                            clearRecent()
                            var accountXML = new XMLHttpRequest();
                           for (var x = 0 ;x < 2; x++){
                    
                                
                                accountXML.open('GET','/accounts/search?user=' + json[x].review_username)
                                accountXML.onreadystatechange = function(){
                                    
                                if ((this.readyState == 4) && (this.status == 200)){
                                    var json2 = JSON.parse(this.responseText);
                                    if (json2){
                                        for (var y = 0; y < 2; y++){
                                        var profile = json2[0].account_profile
                                        var html = formatRecent(json[y], profile)
                                        loadRecent(html);
                                        accountXML.abort()
                                        }
                                    } 
                                    
                                }
                                
                            }
                        accountXML.send();
                        
                        }
                    }
                    
            
                }
                    
            }
            newXML.send()
        }
    }
}
xhr.send()

    


function parseJson(jsonStr){
    var obj = JSON.parse(jsonStr)
    if (obj){
        if (Object.keys(obj).length != 0){
            return obj[0]
        }
    }
    return null;
}


function loadVideo(videoEmbedUrl){
    var video = document.getElementById('videoTrailer');
    video.innerHTML = '<iframe  src="' + videoEmbedUrl + '" frameborder="0" allow="accelerometer; ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function assignCarousel(documentID, increment,imageList){
    for (var i = 0; i < increment; i++){
        var caurosel = document.getElementById(documentID);
        caurosel.innerHTML += formatCarousel(imageList[i],"Concept Art " + (i+1).toString(), i)

    }
}

function clearCarousel(documentID){
    var caurosel = document.getElementById(documentID);
    caurosel.innerHTML = "";

}

function formatCarousel(Images, desc,i){
    if (i == 0){
        var cells = '<div class="carousel-item active">\
        <div class="carousel-caption fade-captions">\
            <p>'+ desc + '</p>\
        </div>\
        <div class="thumbnail">\
            <img src="'+ Images + '" alt="Image not Loaded" width="100%">\
        </div>\
    </div>'
    return cells
    } else {
        var cell = '<div class="carousel-item">\
                                    <div class="carousel-caption fade-captions">\
                                        <p>'+ desc + '</p>\
                                    </div>\
                                    <div class="thumbnail">\
                                        <img src="'+ Images + '" width="100%">\
                                    </div>\
                                </div>'
        return cell
    }
}







function LoadInformation(informations, i){
    if (i == 0){
        var cell = '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 border-left">\
        <div class="guiHeadElement text-capitalize" >\
                <h5 class="guiNameElement">Information</h5>\
            </div>\
        <ul class="noBullet-list">\
            <li>Genre: ' + informations[0] + '</li>\
            <li>Platform: '+informations[1]+ '</li>\
            <li class="star star-active">'+formatStars('<span class="fa fa-star"></span>', informations[2]) +'</li>\
        </ul>\
    </div>'
    return cell
    }
    if (i == 1){
        var cell = '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 border-left">\
        <div class="guiHeadElement text-capitalize" >\
                <h5 class="guiNameElement">Positive</h5>\
            </div>\
        <ul class="noBullet-list">\
            <li>'+ informations[4] +'</li>\
        </ul>\
    </div>'
    return cell
    }
    if (i == 2){
        var cell = '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 border-left">\
        <div class="guiHeadElement text-capitalize" >\
                <h5 class="guiNameElement">Negative</h5>\
            </div>\
        <ul class="noBullet-list">\
            <li>'+ informations[5] + '</li>\
        </ul>\
    </div>'
    return cell
    }
    if (i == 3){
        var cell = '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 border-left">\
        <div class="guiHeadElement text-capitalize" >\
                <h5 class="guiNameElement">Summary</h5>\
            </div>\
        <p class="summaryDetails">\
            '+ informations[6] +'\
        </p>\
    </div>'
    return cell
    }
   
    
    
}
function eraseInfo(){
    var element = document.getElementById('informationContent')
    element.innerHTML = "";
}

function assignInfo(incremental){
    var informationElement = document.getElementById('informationContent')
    informationElement.innerHTML += incremental
}




function formatStars(starCell, interation){
    var cell = '';
    for (var i = 0 ; i < interation; i++){
        cell += starCell;
    }
    return cell;
}


function formatRecent(jsonValue,profile){
    var cell = '<div class="row mt-3">\
    <div class="col-12">\
        <div class="media mx-2 align-items-center">\
            <img src="'+profile+'">\
            <div class="media-body pl-1">\
                <h6 class=" reviewUsername">'+ jsonValue.review_username +'</h6>\
                <h6 class=" reviewPostDate">'+ jsonValue.review_date_posted +'</h6>\
                <li class="star star-active noBullet-list">'+formatStars('<span class="fa fa-star"></span>', jsonValue.review_ratings) +'</li>\
            </div>\
        </div>\
        <h5 class=" reviewSubject">'+jsonValue.review_subject + '</h5>\
        <p class="mr-2 reviewSubjectContent">'+jsonValue.review_comments +'</p>\
    </div>\
</div>'
return cell;
}


function loadRecent(incrementalHTML){
    var recent = document.getElementById('recentReview')
    recent.innerHTML += incrementalHTML;

}

function clearRecent(){
    var recent = document.getElementById('recentReview')
    recent.innerHTML = '';
}



}



