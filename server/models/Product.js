const mongoose = require('mongoose')
var Product = mongoose.model('Product', {
    name: {
        type:String,
        required:true
    },
    category: {
        type:String
    },
    description: {
        type:String
    },
    price: {
        type:String
    },
    productImg: {
        fileName: {
            type:String
        },
        filePath:{
            type:String
        },
        fileType:{
            type:String
        }
    }
})

module.exports = Product;