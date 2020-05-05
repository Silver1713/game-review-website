var modal = document.createElement("script")
modal.type = "text/javascript"
modal.src = '/js/showLoginModals.js'
modal.defer = true;
document.getElementsByTagName("head")[0].appendChild(modal);



function createAccount(date, email, user,pass){
    var jsonContent =  {
        "account_date_created": date,
        "account_email": email,
        "account_username": user,
        "account_password": pass,
        "account_DOB": 0,
        "account_profile": 0,
        "account_isSuspended": 0,
        "account_isEditor": 0
    }

    return jsonContent;

}
var jsonContent =  {
    "account_id": 1,
    "account_date_created": "0000-00-00",
    "account_email": "0",
    "account_username": "root",
    "account_password": "admin&*^%112",
    "account_DOB": "0000-00-00",
    "account_profile": "/images/placeholders/logoPlaceholder.jpg",
    "account_isSuspended": 0,
    "account_isEditor": 1
}

function getUserdb(){
    var userDB = null;
    var xhr = new XMLHttpRequest()
    xhr.open('GET','/accounts')
    xhr.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){
            if (userDB == null){
            userDB = handleJSONResponse(this.responseText);
            }
            var newUserInput = document.getElementById('newUsername');
            var newUserDesc = document.getElementById('newUsernameStatus');
            var status1 = checkInput(newUserInput.value, 1, userDB);
            if (status1 == true){
                
                newUserDesc.className = 'form-text text-success';
            } else {
                newUserDesc.className = 'form-text text-danger';
            }
            
        }    
    }
    xhr.send()
}

function handleJSONResponse(jsonString){

    var jsonObj = JSON.parse(jsonString)
    if (jsonObj) {
        return jsonObj
    }
}

function onLogin(){
    var xml = new XMLHttpRequest();
    xml.open('POST','/accounts');

    xml.onreadystatechange = function(){
        if ((this.readyState == 4) && (this.status == 200)){        
            console.log(this.responseText);
            
        }
    }
    
    var newUserInput = document.getElementById('newUsername');
    var newUserDesc = document.getElementById('newUsernameStatus');
    var newPass = document.getElementById('newPassword');
    var newPassDesc = document.getElementById('newPasswordStatus');
    var ConfirmPass = document.getElementById('confirmPassword');
    var ConfirmPassDesc = document.getElementById('confirmPasswordStatus');
    var emailInput = document.getElementById('newEmail');
    var emailDesc = document.getElementById('newEmailStatus')
    var tosCheck = document.getElementById('isPolicyAgree');

    var desc = [newUserDesc,newPassDesc,ConfirmPassDesc, emailDesc]
    var createdDate = new Date().toUTCString();
    function checkDesc(d){
        for (var i =0; i< d.length; i++){
            if ((desc[i].classList.contains('text-danger'))||(desc[i].classList.contains('text-muted'))){
                return false
            }
        }
        return true;
    }
     
    var status = checkDesc(desc);
    if ((status == true) && (tosCheck.value == "on")){
        console.log("can  login")
        showModals('<h6>Sign Up</h6>',"<p>Sign up success.<br>You will be redirected to our login page...<br>If you have not been redirected after 5 seconds, please click <a href='index.html'>here</a></p>","")
        var json = createAccount(createdDate,emailInput.value,newUserInput.value, newPass.value);
        var body = JSON.stringify(json);
        xml.setRequestHeader('Content-type','application/json');
        xml.send(body)
        setTimeout(function(){
            window.location.href = 'index.html';
        },2000)
    } else {
        showModals('<h6>Sign Up</h6>',"<p>Sign up failed.<br>Please check that you have filled in the form correctly and that you have the stated requirements.</p>","<button data-toggle='hide' data-target='#loginResponse'>Ok</button>")
        console.log("Cannot log in");
    }    
}

function checkUsername(input, objJson){
    for (var index = 0; index < Object.keys(objJson).length; index++){
        if ((objJson[index].account_username === input)){
            return false;
        }
    }
    return true;
}

function checkConfirmPass(pass){
    if (pass[0] === pass[1]){
        return true
    } else {
        return false
    }
}

function checkInput(input, type, jsonRef){
    if (type == 1){
        //Username
        var result = checkUsername(input, jsonRef);
        return result;
    }
    if (type == 2){
        //Password : 2
        var pattern = /(?=.*[A-z])(?=.*[0-9]|.*[\*\?\^\$\[\]\.\{\}\(\)\|\/\%#@/':;\!\_-])(?=.{8,})/
        var result = pattern.test(input)
    }

    if (type == 3){
        //Email : 3
         var pattern = /@[^0-9\+\*\?\^\$\[\]\{\}\(\)\|\/-]+[\w]+\.\w[^0-9]+/
         var result = pattern.test(input);
    }
    if (type == 4){
        var result = checkConfirmPass(input);
    }
    
    return result
}


function onEmailValueChange(){
    var emailInput = document.getElementById('newEmail');
    var emailDesc = document.getElementById('newEmailStatus');
    var status = checkInput(emailInput.value, 3)
    if (status == true){
        emailDesc.className = "form-text text-success"
    } else {
        emailDesc.className = "form-text text-danger"
    }
}


function passwordChecker(){
    var newPass = document.getElementById('newPassword');
    var newPassDesc = document.getElementById('newPasswordStatus');
    var inputStatus = checkInput(newPass.value,2);
    if (inputStatus == true){
        newPassDesc.className = 'form-text text-success';
    } else {
        newPassDesc.className = 'form-text text-danger';
    }
}


function confirmPassCheck(){
    var pass = document.getElementById('newPassword');
    var cPass = document.getElementById('confirmPassword');
    var cPassDesc = document.getElementById('confirmPasswordStatus');
    var pList = [pass.value, cPass.value];
    var status = checkInput(pList, 4);
    if (status == true){
        cPassDesc.className = 'form-text text-success';

    } else {
        cPassDesc.className = 'form-text text-danger';

    }
}