const listItem = require('../database/models/listItemModel')
const toDoController = {};
var $ = require('jquery');
require('es6-promise').polyfill();
require('isomorphic-fetch');

toDoController.addToList = (req,res) => {
  let {
    item
  } = req.body;
  console.log(item)
  listItem.create({
    item
  }, (err, response) => {
    if(err) console.log(err)
    else {
      console.log('here')
      res.send()
    }
  })
}

toDoController.postSpotifyCode = (req,res) => {
  // console.log(req.query.code)
  const CLIENT_ID = '295aa975779544d094dc385b17ade653';
  const CLIENT_SECRET = 'c0aea6f172f544fba2efc58b5ae99762';
  // fetch('https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   body: 
  //   {
  //     grant_type: 'authorization_code', 
  //     code: req.query.code, 
  //     redirect_uri: 'http://localhost:3000/'
  //   },
  //   header: {
  //     'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  // }).then(function(resp) {
  //   console.log('resp in fetch',resp)
  // }).catch(function(err) {
  //   console.log(err)
  // })
  res.redirect('https://accounts.spotify.com/api/token?grant_type=authorization_code&code=AQD_R0X244zZFgvF9j6AvBRTY2HRLIPqxfHc7RHZMaP7UA9Q5kbJ9HNPECeU94C-F0YSqKJ1yKB75xqNQp5tKb6ErYcXtK4woNKI5IjLjtEa2_uOBkF-9hC4Npcilyrs4Q6PkB_HATkTsbfn0cD9HVHXRq246SMs61JXVywRvD2SOZajPHaHusfzhNZpCifDIhE3DP9tRlV3ie5HfIzqZheiFEM1H98JYKr3EJZJSxEZ_qjnFfp-&redirect_uri=http://localhost:3000/&client_id=295aa975779544d094dc385b17ade653&client_secret=c0aea6f172f544fba2efc58b5ae99762')
  res.end();
} 

module.exports = toDoController;