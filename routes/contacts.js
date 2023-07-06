const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

router.get('/', contactsController.getContacts)
router.get('/create', contactsController.getCreateContact)
router.post('/create', contactsController.createContact)
router.get('/contact/:id', contactsController.getContactByid)
router.delete('/contact/delete', contactsController.deleteContact)

module.exports = router