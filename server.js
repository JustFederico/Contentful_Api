require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');

const Product = require('./models/productModel.js')
const app = express()




//middleware..so our app can understan jason. json middlewa. so our app can access json datatype

app.use(express.json())

//routes 

app.get('/', (req, res) => {
    res.send('My Music Webpage, its working ')
}
)

app.get('/musicblog', (req, res) => {
    res.send('My Music Blog')
})

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body); // await because we interact with the database to create a new product
        res.status(200).json(product); // Responding with the product data saved in the database
        //console.log(req.body); // Logging the request body
        //res.send(req.body); // Sending the request body back to the client
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


mongoose.connect(process.env.MONGO_DB)

.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node on 3000') })
}).catch((error) => {
    console.log(error)
})





//console.log("heloo"); node server.js
//19JJTDI5RKdcMwl9
// connect to mongoose
// "Cannot access 'product' before initialization"

