const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const enviro = require('dotenv')
enviro.config()

const app = express()
const PORT = process.env.PORT || 3000

require('./db')

app.use(cors())
app.use(bodyParser.json())

const Product = require('./models/Product')

//get all the products
app.get('/api/products', async (req,res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

//get a single product by ID
app.get('/api/products/:id', async (req,res)=> {
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }catch(err){
        res.status(500).json({err:err.message})
    }
})

//Create a new product
app.post('/api/products', async (req,res)=> {
    try{
        const product = new Product(req.body)
        await product.save()
        res.json(product)
    }catch(err){
        res.status(500).json
    }
})



app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})