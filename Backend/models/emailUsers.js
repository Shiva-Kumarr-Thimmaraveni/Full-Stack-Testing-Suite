const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  password: {
    type: String,
  },
})

const EmailUser = mongoose.model('emailUsers', userSchema)

module.exports = EmailUser
