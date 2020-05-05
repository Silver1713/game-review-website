

function clickedReview(){
    var url = new URL(window.location.href)
    var gameId = url.searchParams.get('id');
    window.location.href = '/gameReview.html?'+ 'id='+ gameId
}

function clickedBack(){
    var url = new URL(window.location.href)
    var gameId = url.searchParams.get('id');
    window.location.href = '/gameDetail.html?'+ 'id='+ gameId
}

function initiate1(){
window.location.href = '/catagory.html?cat=Popular'
     }
function initiate2(){
    window.location.href = '/catagory.html?cat=Top Rated'
        }
function initiate3(){
     window.location.href = '/catagory.html?cat=Editor Picks'
    }
                
function initiate4(){
    window.location.href = '/platform.html?plat=Windows'
}

function initiate5(){
    window.location.href = '/platform.html?plat=Xbox'
}
function initiate6(){
    window.location.href = '/genre.html?genre=Adventure'
}
function initiate7(){
    window.location.href = '/genre.html?genre=MMORPG'
}
    

