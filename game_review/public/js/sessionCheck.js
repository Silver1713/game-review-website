//<div w3-include-html="login_modals.html"></div>
var searchDoc = document.createElement("script")
searchDoc.type = "text/javascript"
searchDoc.src = '/js/handleSearch.js'
document.getElementsByTagName("head")[0].appendChild(searchDoc);

var cookiesScript = document.createElement("script")
cookiesScript.type = "text/javascript"
cookiesScript.src = '/utilitiesJS/cookies.js'
document.getElementsByTagName("head")[0].appendChild(cookiesScript);

var modalScript = document.createElement('script');
modalScript.type = 'text/javascript'
modalScript.src = '/js/showLoginModals.js'
document.getElementsByTagName('head')[0].appendChild(modalScript);

var cryptoHTML = document.createElement('script');
cryptoHTML.type = 'text/javascript'
cryptoHTML.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js'
document.getElementsByTagName('head')[0].appendChild(cryptoHTML);

var encryptDeHTML = document.createElement('script');
encryptDeHTML.type = 'text/javascript'
encryptDeHTML.src = '/utilitiesJS/encrypt_decrypt.js'
document.getElementsByTagName('head')[0].appendChild(encryptDeHTML);

var footerScript = document.createElement('script');
footerScript.type = 'text/javascript'
footerScript.src = '/js/footerClick.js'
document.getElementsByTagName('head')[0].appendChild(footerScript);




function checkSession(){
    OnLoadedFoot()
    var currentSite = location.pathname.substr(location.pathname.lastIndexOf('/')+1);
    var signUpDiv = document.getElementById("signUp")
    var logInDiv = document.getElementById("logIn")
    console.log(getCookie('sessionId'))
    if (getCookie('sessionId') != null){
            signUpDiv.parentNode.removeChild(signUpDiv);
            logInDiv.innerHTML = "<a href=\"\" class=\"nav-link\" onclick=\"deleteCookie('sessionId');\">Log out</a>"
            var val = decryptAES(getCookie('sessionId'), getPassCode());
            var values = val.split(',') //user="hi", pass="70"
            var userHeader = 'user='
            var passHeader= 'pass='
            if (currentSite !== 'loginPage.html'){
                if (values[0].indexOf(userHeader) == 0 && values[1].indexOf(passHeader) == 0){
                    console.log('clear!');
                } else {
                    showModals('<h6>Session Invalid</h6>','<p>Session Expired or Invalid.<br>Please log in again.<br>You will be redirected to the login page.<br>If you have not yet been redirected, please click <a href="loginPage.html">here</a>.</p>','')
                    deleteCookie('sessionId');
                    setTimeout(() => {
                        window.location.href = 'loginPage.html' 
                     }, 2000);
                }
            }
        if (currentSite == "loginPage.html"){
                if (values[0].indexOf(userHeader) == 0 && values[1].indexOf(passHeader) == 0){
                    
                    var username = values[0].substr(userHeader.length, values[0].length)
                    showModals('<h6>Login</h6>','<p>Hello, ' +username + '<br>' +  'You are already logged in.<br>You will be redirected to the homepage...<br>Please click <a href="index.html">here</a> if you have not been redirected after 5 seconds.','');  
                    setTimeout(() => {
                        window.location.href = 'index.html' 
                     }, 2000);
                } else {
                    showModals('<h6>Session Invalid</h6>','<p>Session Expired or Invalid.<br>Please log in again.','<button class="btn btn-white" data-toggle="hide" data-target="#loginResponse"')
                    deleteCookie('sessionId');
                }
            
        }

    }

    
}


