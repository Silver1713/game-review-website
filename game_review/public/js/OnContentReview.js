function assignBanner(image){
    $('.masthead').css('background-image','url('+ image + ')')
}

function prepareEditorContent(incre , jsonObj , accountName,isModal){
    if (isModal == false){
        if (incre == 0){
            var cell = '<div class="editorReviewTitle  ml-2">\
        <h4>'+jsonObj.editor_review_game+'</h4>\
    </div>\
    <div class="contentBox ml-2 editorContent-wrap overflow-hidden">\
        <p>'+jsonObj.editor_review_text+ '</p>\
    </div>'
    return cell;
        } else if (incre == 1){
            var cell = '<div class="row ">\
            <div class="col-6 align-items-center">\
                <div class="media px-1">\
                    <img src="images/placeholders/profilePlaceholder@1x.png" class="w-25">\
                    <div class="media-body">\
                        <p class="m-0" style="font-size: 14px;">'+ accountName+'</p>\
                        <p class="m-0" style="font-size: 14px">'+jsonObj.editor_review_about + '</p>\
                    \
                    </div>\
                </div>\
            </div>\
            <div class="col-6 align-items-right">\
               <div class="d-flex justify-content-end mt-5 px-1"><a href="" data-toggle="modal" data-target="#newEditorWindow" class="card-link">\
                   <u>Full Version</u></a></div>\
            </div>\
        </div>'
        return cell;
        } 
    } else {

        if (incre == 0){
            var cell = '<div class="editorReviewTitle  ml-2">\
        <h4>'+jsonObj.editor_review_game+'</h4>\
    </div>\
    <div class="contentBox ml-2 editorContent-wrap external vertexScrollBar">\
        <p>'+jsonObj.editor_review_text+ '</p>\
    </div>'
    return cell;
        } else if (incre == 1){
            var cell = '<div class="row ">\
            <div class="col-6 align-items-center">\
                <div class="media px-1">\
                    <img src="images/placeholders/profilePlaceholder@1x.png" class="w-25">\
                    <div class="media-body">\
                        <p class="m-0" style="font-size: 14px;">'+ accountName+'</p>\
                        <p class="m-0" style="font-size: 14px">'+jsonObj.editor_review_about + '</p>\
                    \
                    </div>\
                </div>\
            </div>'
        return cell;
        } 

    }
}

function loadEditor(html,isModal){
    
    if (isModal == true){
        var editorModal = document.getElementById('editorContentsModels')
        editorModal.innerHTML +=html
    } else {
        var editor = document.getElementById('editorContents')
        editor.innerHTML += html
    }
}

function clearEditor(){
    var editor = document.getElementById('editorContents')
    editor.innerHTML = ""
    var editorModal = document.getElementById('editorContentsModels')
        editorModal.innerHTML = ""
}



function onReviewLoad(){
    var url = new URL(window.location.href);
    var gameId = url.searchParams.get('id');
    var query = 'games/' + gameId
    var xhr = new XMLHttpRequest()
    xhr.open('GET',query)
    xhr.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){
            
            var jObj = parseJson(this.responseText)[0];
            if (jObj){
                clearEditor();
                clearCarousel('carouselBodyContent')
                loadVideo(jObj.game_trailer)
                var images = [jObj.game_image2, jObj.game_image3]
                onReviewLoad1(jObj.game_title);
                assignBanner(images[1])
                assignCarousel('carouselBodyContent',2,images);
                var xml = new XMLHttpRequest()
                xml.open('GET','/editors/reviews/search?title='+jObj.game_title)
                xml.onreadystatechange = function(){
                    if ((this.status == 200) && (this.readyState == 4)){
                        var parse = parseJson(this.responseText)
                        if (parse){
                        var randomNum = Math.floor((Math.random()*Object.keys(parse).length)+ 0)
                        var choosenReview = parse[randomNum]
                        var xml2 = new XMLHttpRequest()
                        xml2.open('GET','/editors/'+ choosenReview.editor_review_editor_id);
                        xml2.onreadystatechange = function(){
                            
                            var json2 = parseJson(this.responseText)
                            console.log(json2);
                            for (var i = 0; i < 2; i++){
                                var content = prepareEditorContent(i, choosenReview,json2[0].editor_name,false);
                                loadEditor(content, false)
                                var contentModal = prepareEditorContent(i, choosenReview,json2[0].editor_name,true);
                                loadEditor(contentModal, true)
                                xml2.abort()
                            }

                        }
                        xml2.send()
                    }
                        
                        
                        
                    }
                    
                }
                
                xml.send()

            }
        }
        
    }
    xhr.send()
}

function onReviewLoad1(title){
    clearReview()
    var newXML = new XMLHttpRequest()
    newXML.open('GET','/reviews/search?gametitle=' + title)
    newXML.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){
            var jsonObject = parseJson(this.responseText)
            if (jsonObject){
                for (var z = 0; z < Object.keys(jsonObject).length;z++){
                    var xhr5 = new XMLHttpRequest()
                    
                    xhr5.open('GET','/accounts/'+ jsonObject[z].account_review_id)
                    xhr5.onreadystatechange = function(){
                        if ((this.readyState == 4) && (this.status == 200)){
                            var jobj2 = parseJson(this.responseText)[0]
                            if (jobj2){
                                for (var t = 0; t < Object.keys(jsonObject).length;t++){
                                var cell = formatReview(jsonObject[t],jobj2.account_profile);
                                loadReview(cell);
                            }
                            
                            }
                        }
                    }
                
                    
                }
                xhr5.send()
            }
        }
        
    }
    newXML.send()

}

function clearReview(){
    var re = document.getElementById('reviewContentsList')
    re.innerHTML = ""
}



function formatReview(json, profile){
    var cell = '<div class="row">\
    <div class="col-12">\
       \
            <div class="row p-2">\
        <div class="col-12">\
            <div class="media mx-2 align-items-center">\
                <img src="'+ profile + '">\
                <div class="media-body pl-1">\
                    <h6 class=" reviewUsername m-0">'+json.review_username+'</h6>\
                    <h6 class=" reviewPostDate m-0">'+ json.review_date_posted+'</h6>\
                    <h6 class=" reviewRating m-0 star star-active">'+ formatStars('<span class="fa fa-star"></span>', json.review_ratings) + '</h6>\
                </div>\
            </div>\
            <h5 class=" reviewSubject">'+ json.review_subject+'</h5>\
            <p class="mr-2 reviewSubjectContent">'+json.review_comments+'</p>\
        </div>\
    </div>\
    </div>\
</div>'
return cell
}

function loadReview(html){
    var re = document.getElementById('reviewContentsList')
    re.innerHTML += html
}
    
            


    
function ccompareEditorName(editorJson, editorIDReview){
    if ((editorJson.editor_review_editor_id) == editorIDReview){
        return true;
    }
    return null;
}

function parseJson(jsonStr){
    var obj = JSON.parse(jsonStr)
    if (obj){
        if (Object.keys(obj).length != 0){
            return obj
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











function formatStars(starCell, interation){
    var cell = '';
    for (var i = 0 ; i < interation; i++){
        cell += starCell;
    }
    return cell;
}





{/* <div class="editorReviewTitle  ml-2">
                                        <h4>Warframe: A game that rose without Backing</h4>
                                    </div>
                                    <div class="contentBox ml-2 editorContent-wrap overflow-hidden">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                    <div class="row ">
                                        <div class="col-6 align-items-center">
                                            <div class="media px-1">
                                                <img src="images/placeholders/profilePlaceholder@1x.png" class="w-25">
                                                <div class="media-body">
                                                    <p class="m-0" style="font-size: 14px;">Admin</p>
                                                    <p class="m-0" style="font-size: 14px;">Posted at 10 January</p>
                                                    <p class="m-0" style="font-size: 14px">Admin@VertexGame.com</p>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 align-items-right">
                                           <div class="d-flex justify-content-end mt-5 px-1"><a href="" data-toggle="modal" data-target="#newEditorWindow" class="card-link">
                                               <u>Full Version</u></a></div>
                                        </div>
                                    </div> */}

                                    function formatStars(starCell, interation){
                                        var cell = '';
                                        for (var i = 0 ; i < interation; i++){
                                            cell += starCell;
                                        }
                                        return cell;
                                    }