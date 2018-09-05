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

module.exports = toDoController;