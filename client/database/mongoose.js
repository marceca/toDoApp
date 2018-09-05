const mongoose = require('mongoose');
mongoose.connect('mongodb://Michael:p4ssw0rd@ds043981.mlab.com:43981/todoapp', { useNewUrlParser: true })


module.exports = mongoose;