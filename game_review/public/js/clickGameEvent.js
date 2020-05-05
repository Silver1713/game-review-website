

function attachClickEventGame(){
    $('.gameSelection').click(function(){
        var gameID = $(this).attr('id');
        var link = '/games/' + gameID;
        var xhr2 = new XMLHttpRequest()
        xhr2.open('GET', link)
        xhr2.onload = function(success){
            if (success){
                var jObj = parseJson(this.responseText)
                if (jObj != null){
                    var link = $('.gameLink')
                    if (link){
                    var hrefLink = link.attr('href').toString();
                    link.attr('href',hrefLink + '?id=' + gameID)
                    var newHref = link.attr('href');
                    window.location.href = newHref.toString()
                    link.attr('href',hrefLink);
                    console.log(99990)

                    }
                }
            } 
        }
        xhr2.send()
    })
}

function parseJson(json){
    var jObj = JSON.parse(json);
    if ((Object.keys(jObj).length != 0)){
        return jObj;
    }
    return null;
}
