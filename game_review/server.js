"use strict";

const express = require("express");
const routeAccount = require("./routes/routeAccount");
const routeGames = require('./routes/routeGames');
const routeReviews = require('./routes/routeReviews')
const routeGenre = require('./routes/genreRoute');
const routeEditor = require('./routes/editorRoute')
const routePlatform = require('./routes/platformRoute');
const replyReview = require("./routes/replyReviewRoute");
const editorReview = require('./routes/editorReviewRoute')
const bodyParser = require("body-parser"); 
var app = express(); //Create a express application
var host = "127.0.0.1"; // Web host IP
var port = 8080; // Port
var startPage = "index.html"; // Startpage

app.use(express.static("./public")); //Root dir
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeGames.routeGames(app);
routeAccount.routeAccounts(app);
routeReviews.routeReviews(app);
routeGenre.routeGenre(app);
routePlatform.routePlatform(app);
routeEditor.routeEditor(app);
replyReview.routeReplyReview(app);
editorReview.routeEditorReview(app);





function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
    if (host == "127.0.0.1"){
        console.log("Or http://localhost:"+"%s",port);
    }
    console.log("Host: "+"%s"+"\nPort: "+"%s",host,port);
});
