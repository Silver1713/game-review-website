



function createCookie(name, value, expiryDate,path){
    var cookieExpiry = ";expires="+expiryDate.toUTCString();
    var cookieFormat = name+"="+value+cookieExpiry+";path="+ path
    console.log(cookieFormat);
    document.cookie = cookieFormat;

}


// cookie
// cname=Hello;expires=tmr;path=\





function getCookie(cookieName){
    var name = cookieName+"=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookie = decodedCookie.split(";");

    for (var i = 0; i < cookie.length;i++){
        //detect name part
        var cookieVal = cookie[i]

        while (cookieVal.charAt(0) == ' '){
            cookieVal = cookieVal.substr(1);

        }

        if (cookieVal.indexOf(name) == '0'){
            var value = cookieVal.substr(name.length, cookieVal.length);
            return value;
        }
    }
    return null;
}


function deleteCookie(cookieName){
    var tokenCookie = getCookie(cookieName);

    if (tokenCookie != null){
        var oldDate = new Date()
        oldDate.setFullYear(1970,0,1);
        createCookie(cookieName,'',oldDate,'/');
    }
}
