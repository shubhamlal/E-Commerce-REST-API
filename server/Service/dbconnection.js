const mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.0.103:27017/E-Restraurent',{
    useNewUrlParser:true,
    useCreateIndex:true
})