// require cryptography modules


var tokenSize = 256;
var ivSize = 128;
var numOfLoops = 100;

function getPassCode(){
    var key = "**CDEVCODING**"
    return key;
}

function encryptAES(value, passcode){
    var SHAKey = CryptoJS.SHA256(passcode,"Random**728*&^%$47");
    var passKey = SHAKey.toString(CryptoJS.enc.SHA256);
    //generate salt value
    var salt = CryptoJS.lib.WordArray.random(128/8);
    //Encode the passcode
    var keycode = CryptoJS.PBKDF2(passKey, salt , {
        keySize: tokenSize/32,
        iterations: numOfLoops
    });

    var iv = CryptoJS.lib.WordArray.random(ivSize/8);

    var encryptedMessage = CryptoJS.AES.encrypt(value, keycode, {
        iv:iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });

    var fullEncryptedMessage = salt.toString()+iv.toString()+encryptedMessage.toString()
    
    return fullEncryptedMessage
    //Contain salt annd iv which allow for decryption


}

function decryptAES(encryptedValue, passcode){
    var SHAKey = CryptoJS.SHA256(passcode,"Random**728*&^%$47");
    var passKey = SHAKey.toString(CryptoJS.enc.SHA256);
    //reverse enginner
    var salt = CryptoJS.enc.Hex.parse(encryptedValue.substr(0,32));
    
    var iv = CryptoJS.enc.Hex.parse(encryptedValue.substr(32,32));
    var encrypted = encryptedValue.substr(64);

    //reverse enginner key

    var keycode = CryptoJS.PBKDF2(passKey, salt, {
        keySize: tokenSize/32,
        iterations: numOfLoops
    });

    var decryptedMessage = CryptoJS.AES.decrypt(encrypted, keycode, {
        iv:iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    var decodedString = decryptedMessage.toString(CryptoJS.enc.Utf8);
    return decodedString;
}
