const express = require('express')

const app = express()

const hbs = require('hbs')

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

require('./db')

const Product = require('./models/Product.model')

app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/tienda', (req, res) => {
    Product
        .find()
        .select({ title: 1, price: 1, description: 1, images: 1 })
        .sort({ price: 1 })
        .then(product => {
            res.render('tienda', { product })
        })
        .catch(err => console.log(err))
})


app.listen(3000, () => console.log('SERVER RUNNING ON POPRT 3000'))