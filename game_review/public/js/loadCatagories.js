
//<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-2 ">            <a href="gameDetail.html" class="gameLink"><div id="1" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">                <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Warframe.jpg" width="100%"><div class="imgOverlay fade-captions">            <h6 style="color: white;"><b>Test_Game</b></h6>        </div>                </div></a>        </div>


function setCatagory(){
    var url =new URL (window.location.href);
    var query = url.searchParams.get('cat');
    var res = query.replace('%20','\xa0')
    var c = document.getElementById('catTitle');
    var title = res;
    c.innerText = title.toUpperCase();
    
}
//games?sortFav=true
function loadCell(jsonInfo){
    var cell = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-2">\
    <a href="gameDetail.html" class="gameLink"><div id="'+ jsonInfo.game_id+'" class="gameSelection thumbnail overlayimg-con inner-shadow2 rounded">\
    <img src="'+jsonInfo.game_image2+'" width="100%">\
    <div class="imgOverlay fade-captions">\
    <h6 style="color: white;"><b>'+jsonInfo.game_title+ '</b></h6>\
    </div>                </div></a>        </div>'
    return cell;
}
function upLoadContent(content){
    var upload = document.getElementById('contentCat');
    upload.innerHTML += content;
}
function clearContent(){
    var upload = document.getElementById('contentCat');
    upload.innerHTML = "";
}

function onLoad(){
    
    var url = new URL(window.location.href)
    var xhr = new XMLHttpRequest()
    setCatagory();
    if (url.searchParams.get('cat') == 'Popular'){
        xhr.abort()
        xhr.open('GET','/games?sortFav=true')
        xhr.onreadystatechange = function(){
            if ((this.readyState == 4) && (this.status == 200)){
                var json = JSON.parse(this.responseText);
                if (json){
                    clearContent()
                    for (var i = 0; i < Object.keys(json).length; i++){
                        upLoadContent(loadCell(json[i]))
                        attachClickEventGame()

                    }
                }
            }
        }
        xhr.send()
    }
    if (url.searchParams.get('cat') == 'Top Rated'){
        xhr.open('GET','/games?sortRev=true')
        xhr.onreadystatechange = function(){
            if ((this.readyState == 4) && (this.status == 200)){
                var json = JSON.parse(this.responseText);
                if (json){
                    clearContent()
                    for (var i = 0; i < Object.keys(json).length; i++){
                        upLoadContent(loadCell(json[i]))
                        attachClickEventGame()

                    }
                }
            }
        }
        
        xhr.send()
    }

    if (url.searchParams.get('cat') == 'Editor Picks'){
        xhr.open('GET','/games?picked=1')
        xhr.onreadystatechange = function(){
            if ((this.readyState == 4) && (this.status == 200)){
                var json = JSON.parse(this.responseText);
                if (json){
                    clearContent()
                    for (var i = 0; i < Object.keys(json).length; i++){
                        upLoadContent(loadCell(json[i]))
                        attachClickEventGame()

                    }
                }
            }
        }
        
        xhr.send()
    }
    
}


// function attachClickEventGame(){
//     $('.gameSelection').click(function(){
//         var gameID = $(this).attr('id');
//         var link = '/games/' + gameID;
//         var xhr2 = new XMLHttpRequest()
//         xhr2.open('GET', link)
//         xhr2.onload = function(success){
//             if (success){
//                 var jObj = parseJson(this.responseText)
//                 if (jObj != null){
//                     var link = $('.gameLink')
//                     if (link){
//                     var hrefLink = link.attr('href').toString();
//                     link.attr('href',hrefLink + '?id=' + gameID)
//                     var newHref = link.attr('href');
//                     window.location.href = newHref.toString()
//                     link.attr('href',hrefLink);
//                     console.log(99990)

//                     }
//                 }
//             } 
//         }
//         xhr2.send()
//     })
// }

function parseJson(json){
    var jObj = JSON.parse(json);
    if ((Object.keys(jObj).length != 0)){
        return jObj;
    }
    return null;
}

