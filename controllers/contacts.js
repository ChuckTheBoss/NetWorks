const Contact = require('../models/contact');

module.exports = {
    getContacts: async (req, res) => {
        //console.log(Contact.find())
        try {
            const contacts = await Contact.find()
            res.render('contacts.ejs', { contacts: contacts })
        } catch (err) {
            console.log(err)
        }
    },
    createContact: async (req, res) => {
        try {
            await Contact.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            })
            console.log('Contact has been added!')
            res.redirect('/contacts')
        } catch (err) {
            console.error(err)
        }
    },
}