const PORT = 7878;
const express = require("express");
require('../Service/dbconnection');
var Product = require('../models/Product');
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.get('/products', (req,res) =>{
    Product.find({}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(404).send(e)
    })
})

app.get('/products/:name', (req,res) =>{
    var _name = req.params.name
    console.log(_name);
    Product.findOne({name:_name}).then((product) => {
        res.send(product)
    }).catch((e) => {
        res.status(404).send(e)
    })
})



app.post('/products', (req,res) => {
    const product = new Product(req.body)
    product.save().then(() =>{
        res.status(200).send(product)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at `+ PORT);
})