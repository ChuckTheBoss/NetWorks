const User = require('../models/User');
const passport = require('passport');

module.exports = {
    getAuthGoogle: () => passport.authenticate('google', { scope: ['profile'] }),
    getAuthGoogleCallback: () => passport.authenticate('google', { failureRedirect: '/' }, (req, res) => {
        res.redirect('/contacts')
    })
}