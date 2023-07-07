const express = require('express');
const path = require("path");
const app = express();
const connectDB = require('./models/connectDB');
const React = require('react');
const ReactDOM = require('react-dom');
const passport = require('passport');
const session = require('express-session');
const homeRoutes = require('./routes/home')
const contactRoutes = require("./routes/contacts")
const authRoutes = require("./routes/auth")
const PORT = process.env.PORT || 3000;
require("/config/passport")(passport)
connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
    "/js",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)

app.use(session({
    secret: 'peter pan',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/", homeRoutes);
app.use("/contacts", contactRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})