const PORT = 7878;

const express = require("express");

require('./server/Service/dbconnection');
const Product = require('./server/models/Product');



const app = express()
app.use(express.json())
app.get('', (req,res) =>{
    res.send("Hello Ecommerce App");
})

app.post('/products', (req,res) => {
    const product = new Product(req.body)
    product.save().then(() =>{
        req.send(product)
    }).catch((err) => {
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at $PORT`);
})