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
                eventMetAt: req.body.eventMetAt,
                dateMet: req.body.dateMet,
                company: req.body.company,
                positionAtCompany: req.body.positionAtCompany,
                spark: req.body.spark,
                linkedIn: req.body.linkedIn,
                twitter: req.body.twitter
            })
            console.log('Contact has been added!')
            res.redirect('/contacts')
        } catch (err) {
            console.error(err)
        }
    },
    getCreateContact: (req, res) => {
        res.render('createContact.ejs')
    },
    getContactByid: async (req, res) => {
        try {
            const contact = await Contact.findById(req.params.id)
            res.render('contact.ejs', { contact: contact })
        } catch (err) {
            console.log(err)
        }
    },
    deleteContact: async (req, res) => {
        console.log("body id" + req.body.contactIdFromJSFile)
        try {
            await Contact.findOneAndDelete({ _id: req.body.contactIdFromJSFile })
            console.log('Contact has been deleted!')
            res.send('contact deleted!')
        } catch (err) {
            console.log(err)
        }
    },
}