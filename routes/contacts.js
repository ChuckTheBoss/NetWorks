const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

router.post('/create', contactsController.createContact)

module.exports = router