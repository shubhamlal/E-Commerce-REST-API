const PORT = 7879;
const express = require("express");

const Order = require('../models/Order')
var app = express()

app.get('/Orders/:id', (req,res) => {
    res.send(req.body)
})

//app.post('/Orders')

//app.put()

//app.delete()

app.listen(PORT, () => {
    console.log(`Server is listening at `+ PORT);
})