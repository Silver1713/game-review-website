var cookiesScript = document.createElement("script")
cookiesScript.type = "text/javascript"
cookiesScript.src = '/utilitiesJS/cookies.js'
document.getElementsByTagName("head")[0].appendChild(cookiesScript);

var cryptoScript = document.createElement("script")
cryptoScript.type = "text/javascript"
cryptoScript.src = '/utilitiesJS/encrypt_decrypt.js'
cryptoScript.defer = true;
document.getElementsByTagName("head")[0].appendChild(cryptoScript);



function checkCredentials(username,password, jsonObject){
    //Function to check entries with database.
    for (var index = 0; index < Object.keys(jsonObject).length; index++){
        if ((jsonObject[index].account_username === username) && (jsonObject[index].account_password === password)){
            return true;
        }
    }
    return false;
}

function handleJsonRespond(jsonString){
    var jsonObj = JSON.parse(jsonString)
    if (jsonObj) {
        return jsonObj
    }
}

function OnStateChanged(){
    if (this.readyState === 4 && this.status === 200){
        
        console.log(this.responseText)
        var userInput = document.getElementById("usernameInput");
        var passInput = document.getElementById("passInput")
        var jsonObj = handleJsonRespond(this.responseText);
        console.log(Object.keys(jsonObj).length);

        //Check Entries

        var isSuccess = checkCredentials(userInput.value, passInput.value, jsonObj);

        if (isSuccess){
            console.log("Success - Renewing/Checking Session");
            var cookieName = "sessionId"
            var cookie = getCookie(cookieName);
            if (cookie == null){
                console.log("There are no session, creating new session");
                var key = getPassCode();
                var tokenValues = "user="+userInput.value+","+"pass="+passInput.value
                var encryptedToken = encryptAES(tokenValues, key);
                var date = new Date()
                date.setMonth(date.getMonth() + 1);
                
                createCookie(cookieName,encryptedToken,date,"/")
                showModals('<h6>Login</h6>', '<p>Login success.<br>You will be redirected to the homepage..<br>Click <a href="index.html">here</a> if you have not been directed to the homepage.</p>','<button class="btn btn-default" data-toggle="dismiss" data-target="#loginResponse">Ok</button>')
                setTimeout(function(){
                    window.location.href = "index.html"
                },(2*1000))
                
                
            } else {
                var val = decryptAES(getCookie('sessionId'), getPassCode());
                var values = val.split(',') //user="hi", pass="70"
                var userHeader = 'user='
                var passHeader= 'pass='

                if (values[0].indexOf(userHeader) == 0 && values[1].indexOf(passHeader) == 0){
                    var username = values[0].substr(userHeader.length, values[0].length)
                    var password = values[1].substr(passHeader.length, values[1].length)
                    showModals('<h6>Login</h6>','<p>Hello,' + username + '<br>' +  'You are already logged in.<br>You will be redirected to the homepage...<br>Please click <a href="index.html">here</a> if you have not been redirected after 5 seconds.','');
                    
                }
                
            }

            
        } else if (isSuccess == false) {
            //Handle error
            showModals('<h6>Login</h6>', '<p>Username or/and Password is/are Incorrect.</p>','<button class="btn btn-white" onclick="dismissModal()">Ok</button>');
        }

        

    }
}

function OnButtonClicked(){
    var xml = new XMLHttpRequest();
    var apiLink = "/accounts"
    xml.open("GET", apiLink)
    xml.send();
    xml.onreadystatechange = OnStateChanged;
}

function dismissModal(){
    $('#loginResponse').modal('hide');

}