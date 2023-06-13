const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

router.post('/contacts/create', contactsController.createContact)

module.exports = router