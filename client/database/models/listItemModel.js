const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema ({
  listItem: String
})

const listItem = mongoose.model('listItem', listItemSchema);

module.exports = listItem;