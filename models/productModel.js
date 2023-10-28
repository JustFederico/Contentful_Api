// interacting with DB-we need mongoose...in order to create productModel we need productSchema

const mongoose = require('mongoose')

const productSchema = mongoose.Schema({


    name: {
        type: String,
        required: [true, "please enter a product name"],
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: false,
    }
}, { timestamps: true})

 const Product = mongoose.model('Product', productSchema);
 module.export = Product;  

 //next step is to USE model to save data in mongo db...use productModel to save data in db