const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

router.get('/', contactsController.getContacts)
router.get('/create', contactsController.getCreateContact)
router.post('/create', contactsController.createContact)

module.exports = router