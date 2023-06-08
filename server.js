const express = require('express');
const app = express();
const connectDB = require('./model/connectDB');
const React = require('react');
const ReactDOM = require('react-dom');
const homeRoutes = require('./route/home')
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})