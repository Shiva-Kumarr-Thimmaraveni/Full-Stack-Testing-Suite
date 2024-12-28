const express = require('express')
const Router = express.Router()
const { googleAuth } = require('../controllers/authController.js')
Router.get('/google', googleAuth)

module.exports = Router
