var cryptoHTML = document.createElement('script');
cryptoHTML.type = 'text/javascript'
cryptoHTML.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js'
document.getElementsByTagName('head')[0].appendChild(cryptoHTML);

var encryptDeHTML = document.createElement('script');
encryptDeHTML.type = 'text/javascript'
encryptDeHTML.src = '/utilitiesJS/encrypt_decrypt.js'
document.getElementsByTagName('head')[0].appendChild(encryptDeHTML);

var cookiesScript = document.createElement("script")
cookiesScript.type = "text/javascript"
cookiesScript.src = '/utilitiesJS/cookies.js'
document.getElementsByTagName("head")[0].appendChild(cookiesScript);

//  var body = {
//     "review_isAnonymus": bool,
//     "review_username": 'null',
//     "review_ratings": rangeBarValue.value,
//     "review_subject": subjectInput.value,
//     "review_comments": reviewText.value,
//     "review_date_posted": new Date().toDateString(),
//     "account_review_id": 1,
//     "game_review_id": id
// }





function onCLickReviewAdd(){
    var subjectInput = document.getElementById('newSubject');
    var rangeBarValue = document.getElementById('rangeAns');
    var isAnonymus = document.getElementById('isAnonymus');
    var reviewText = document.getElementById('reviewText');
    var bool = null
    if (isAnonymus == "On"){
        bool = 1;
        } 
         else {
            bool = 0;
        } 
    var url = new URL(window.location.href)
    var id = url.searchParams.get('id');
   var xml = new XMLHttpRequest()
   xml.onreadystatechange = function(){
   }
  var body = {
    "review_isAnonymus": bool,
    "review_username": getUserFromCookie(),
    "review_ratings": rangeBarValue.innerText,
    "review_subject": subjectInput.value,
    "review_comments": reviewText.value,
    "review_date_posted": new Date().toISOString(),
    "account_review_id": 1,
    "game_review_id": id
  }
  xml.open('POST','/reviews');
  xml.setRequestHeader('Content-type','application/json');
  var jsonBody = JSON.stringify(body)
  xml.onreadystatechange = function(){
      if ((this.status == 200) && (this.readyState == 4)){
          console.log(JSON.parse(this.responseText));
      }
  }
  xml.send(jsonBody)


}


function onbarChange(){
    var rangeBar = document.getElementById('ratingBar');
    var rangeBarValue = document.getElementById('rangeAns')
    rangeBarValue.innerText = rangeBar.value;
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


function getUserFromCookie(){
    var sessionId = getCookie('sessionId')
    if (sessionId){
        var decrypt = decryptAES(sessionId, getPassCode());
        var splited = decrypt.split(',');
        var newUser = splited[0]
        var userHead = 'user='
        if (newUser.indexOf(userHead) == 0){
            var username = newUser.substr(userHead.length, newUser.length);
            return username;
        }
        
    } else {
        showModals('Not Sign in','Please sign in.','');
    }
}