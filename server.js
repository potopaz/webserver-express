const express = require('express')
const hbs = require('hbs')
const app = express()
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Nicolas'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});