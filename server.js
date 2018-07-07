var express = require("express");
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.text());

app.use(express.static(process.cwd() + '/public'));


// Default route.
app.use('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


//Listening
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("listening on " + PORT);
});