const mongoose = require('mongoose')

var Order = mongoose.model('Order',{
    products: [
        {
            name: {
                type:String,
                required:true
            },
            price: {
                type:String,
                required:true
            },
            category: {
                type:String,
                required:true
            },
            description: {
                type:String,
                required:true
            }

        }
    ],
    location: {
        type:String,
        required:true
    },
    
})
