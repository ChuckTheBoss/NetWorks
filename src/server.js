const express = require('express');
const app = express();
const React = require('react');
const ReactDOM = require('react-dom');
const PORT = 3000

app.listen(PORT, () => {
    console.log("server listening on port 3000")
})