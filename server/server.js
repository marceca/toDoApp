const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const toDoController = require('../client/controllers/toDoController');

app.use(express.static(__dirname + './../'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("body-parser").json());
app.use(cookieParser());

app.post('/add-list-item', (req,res) => {
  toDoController.addToList(req,res);
})


app.get('/login', function(req, res) {
  var redirect_uri = 'http://localhost:3000/spotify-access-token';
  var my_client_id = '295aa975779544d094dc385b17ade653';
  var scopes = 'playlist-read-private';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
  });

app.get('/spotify-access-token', function(req,res) {
  toDoController.postSpotifyCode(req,res);
})


app.post('/spotify-access-token', function(req,res) {
  console.log('made it')
})

app.listen(3000);