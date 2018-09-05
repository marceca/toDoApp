const listItem = require('../database/models/listItemModel')
const toDoController = {};

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
  res.locals.code = req.query.code;
  console.log(res.locals.code)

  

  res.redirect('')
  res.end();
} 

module.exports = toDoController;