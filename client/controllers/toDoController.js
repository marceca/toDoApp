const listItem = require('../database/models/listItemModel')
const toDoController = {};
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
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { "Content-Type" : "application/x-www-form-urlencoded" },
    body: {grant_type: 'authorization_code', code: req.query.code, redirect_uri: 'http://localhost:3000/', client_id: '295aa975779544d094dc385b17ade653', client_secret: 'c0aea6f172f544fba2efc58b5ae99762'}
  }).then(function(resp) {
    console.log('resp in fetch',resp)
  })
  res.end();
} 

module.exports = toDoController;