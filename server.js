const express = require('express')
const hbs = require('hbs')
const app = express()
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Nicolas'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});