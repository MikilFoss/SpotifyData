var express = require('express');
var request = require('request');
var querystring = require('querystring');
const app = express();
const port = 3000;

var client_id = 'c4f0958cbf0741fcaa7dc824e1aca38a'; // Your client id
var client_secret = 'edd99fffb1ea4007a1e1764060544774'; // Your secret
var redirect_uri = 'http://localhost:3000/callback';
  
// Send homepage to the user
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// Have the user login to their spotify account
app.get('/login', function(req, res) {

    var scope = 'user-read-private user-read-email';
    // your application requests authorization
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri
      }));
  });


// Establishes connection between code and web server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });