const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const auth = require('../controllers/auth')

router.get('/google', authController.getAuthGoogle)
router.get('/google/callback', authController.getAuthGoogleCallback)

module.exports = router