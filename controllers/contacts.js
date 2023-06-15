const Contact = require('../models/contact');

module.exports = {
    createContact: async (req, res) => {
        try {
            await Contact.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            })
            console.log('Contact has been added!')
            //res.redirect('/contact')
        } catch (err) {
            console.error(err)
        }
    },
}