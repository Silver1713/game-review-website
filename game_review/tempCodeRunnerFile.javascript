var pattern = /[A-z]/
var pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
var str = "tTp#OPOP5"


console.log(pattern2.test(str))