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


app.listen(3000);